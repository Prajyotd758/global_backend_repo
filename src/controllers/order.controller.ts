import { Request, Response } from "express";
import crypto from "crypto";
import { Types } from "mongoose";
import { razorpay } from "../config/razorpay";
import { Order } from "../models/order.model";
import Product from "../models/product.model";
import { Cart } from "../models/cart.model";
import { Address } from "../models/Address.model";
import {
  totals,
  KEYCHAIN_PRICE,
  KEYCHAIN_FREE_AT,
  FREE_SHIPPING_AT,
} from "../utils/pricing";

const MAX_QTY = 10; // match frontend MAX_QTY

// ---------- helpers ----------
export async function markPaid(
  orderId: string | Types.ObjectId,
  paymentId: string
) {
  // idempotent: only the first caller flips pending -> paid
  const order = await Order.findOneAndUpdate(
    { _id: orderId, status: { $ne: "paid" } },
    { status: "paid", razorpayPaymentId: paymentId, paidAt: new Date() },
    { new: true }
  );
  if (order?.source === "cart")
    await Cart.updateOne({ user: order.user }, { $set: { items: [] } });
  return order;
}

const sig = (a: string, b: string) => {
  const x = Buffer.from(a),
    y = Buffer.from(b);
  return x.length === y.length && crypto.timingSafeEqual(x, y);
};

// ---------- POST /orders  ----------
export async function createOrder(req: Request, res: Response) {
  try {
    const userId = req.user!.id;
    const { addressId, notes = "", buyNow, custom } = req.body;

    const addr = await Address.findOne({ _id: addressId, user: userId }).lean();
    if (!addr) return res.status(400).json({ message: "Invalid address" });

    let items: any[] = [];
    let source: "cart" | "buyNow" | "custom";
    let freeAt = FREE_SHIPPING_AT;

    if (custom) {
      const qty = Math.min(MAX_QTY, Math.max(1, Number(custom.quantity) || 1));
      const name = String(custom.name ?? "")
        .trim()
        .slice(0, 20); // match frontend limit
      if (custom.type !== "keychain" || !name)
        return res.status(400).json({ message: "Invalid custom item" });
      items = [
        {
          title: `Custom keychain · ${name}`,
          price: KEYCHAIN_PRICE,
          quantity: qty,
          custom: {
            name,
            font: String(custom.font ?? ""),
            color: String(custom.color ?? ""),
          },
        },
      ];
      source = "custom";
      freeAt = KEYCHAIN_FREE_AT;
    } else if (buyNow) {
      const p = await Product.findById(buyNow.productId).lean();
      if (!p) return res.status(404).json({ message: "Product not found" });
      const qty = Math.min(MAX_QTY, Math.max(1, Number(buyNow.quantity) || 1));
      items = [
        {
          product: p._id,
          title: p.title,
          image: p.images?.[0],
          price: p.price,
          quantity: qty,
        },
      ];
      source = "buyNow";
    } else {
      const cart = await Cart.findOne({ user: userId })
        .populate("items.product")
        .lean();
      const lines = (cart?.items ?? []).filter((l: any) => l.product);
      if (!lines.length)
        return res.status(400).json({ message: "Cart is empty" });
      items = lines.map((l: any) => ({
        product: l.product._id,
        title: l.product.title,
        image: l.product.images?.[0],
        price: l.product.price,
        quantity: l.quantity,
      }));
      source = "cart";
    }

    const subtotal = items.reduce((n, i) => n + i.price * i.quantity, 0);
    const t = totals(subtotal, freeAt);

    const _id = new Types.ObjectId();
    const rzpOrder = await razorpay.orders.create({
      amount: Math.round(t.total * 100), // paise
      currency: "INR",
      receipt: String(_id),
      notes: { orderId: String(_id) },
    });

    await Order.create({
      _id,
      user: userId,
      items,
      source,
      notes: String(notes).slice(0, 500),
      address: {
        name: addr.name,
        phone: addr.phone,
        line1: addr.line1,
        line2: addr.line2,
        city: addr.city,
        state: addr.state,
        pincode: addr.pincode,
      },
      ...t,
      razorpayOrderId: rzpOrder.id,
    });

    res.status(201).json({
      orderId: String(_id),
      razorpayOrderId: rzpOrder.id,
      amount: rzpOrder.amount,
      currency: rzpOrder.currency,
    });
  } catch (e: any) {
    console.error("createOrder", e);
    res.status(500).json({ message: "Could not create order" });
  }
}

// ---------- POST /orders/verify ----------
export async function verifyPayment(req: Request, res: Response) {
  try {
    const {
      orderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;
    if (
      !orderId ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    )
      return res.status(400).json({ message: "Missing payment fields" });

    const order = await Order.findOne({
      _id: orderId,
      user: req.user!.id,
      razorpayOrderId: razorpay_order_id,
    });
    if (!order) return res.status(404).json({ message: "Order not found" });

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    if (!sig(expected, razorpay_signature))
      return res.status(400).json({ message: "Invalid payment signature" });

    await markPaid(order._id, razorpay_payment_id);
    res.json({ success: true });
  } catch (e) {
    console.error("verifyPayment", e);
    res.status(500).json({ message: "Verification failed" });
  }
}

// ---------- GET /orders/:id ----------
export async function getOrder(req: Request, res: Response) {
  const id = req.params.id as string;
  if (!Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "Not found" });

  const order = await Order.findOne({ _id: id, user: req.user!.id }).lean();
  if (!order) return res.status(404).json({ message: "Not found" });
  res.json(order);
}

// ---------- GET /orders ----------
const toSummary = (o: any) => ({
  _id: o._id,
  orderNumber: String(o._id).slice(-8).toUpperCase(),
  items: o.items.map((i: any) => ({
    name: i.title,
    image: i.image,
    quantity: i.quantity,
  })),
  total: o.total,
  status: o.status,
  createdAt: o.createdAt,
});

// in getOrderSummary: const recentOrders = orders.map(toSummary);

export async function listOrders(req: Request, res: Response) {
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = 10;
  const filter = { user: req.user!.id, status: "paid" };
  const [orders, total] = await Promise.all([
    Order.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .select("items total status createdAt")
      .lean(),
    Order.countDocuments(filter),
  ]);
  res.json({
    orders: orders.map(toSummary),
    page,
    pages: Math.ceil(total / limit),
  });
}

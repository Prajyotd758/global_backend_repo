import { Request, Response } from "express";
import crypto from "crypto";
import { Order } from "../models/order.model";
import { markPaid } from "./order.controller";

export async function razorpayWebhook(req: Request, res: Response) {
  const signature = req.header("x-razorpay-signature") ?? "";
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(req.body) // raw Buffer
    .digest("hex");
  const a = Buffer.from(expected),
    b = Buffer.from(signature);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b))
    return res.status(400).send("bad signature");

  const event = JSON.parse(req.body.toString());
  const pay = event.payload?.payment?.entity;
  try {
    if (event.event === "payment.captured" && pay) {
      const order = await Order.findOne({ razorpayOrderId: pay.order_id });
      if (order && Math.round(order.total! * 100) === pay.amount)
        await markPaid(order._id, pay.id);
    } else if (event.event === "payment.failed" && pay) {
      // only downgrade if still pending; user may retry and succeed on same order
      await Order.updateOne(
        { razorpayOrderId: pay.order_id, status: "pending" },
        { status: "failed" }
      );
    }
    res.json({ ok: true });
  } catch (e) {
    console.error("webhook", e);
    res.status(500).send("error"); // Razorpay will retry
  }
}

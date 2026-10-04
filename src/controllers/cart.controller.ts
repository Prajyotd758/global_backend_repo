import type { Request } from "express";
import { isValidObjectId, Types } from "mongoose";
import { Cart, MAX_QTY } from "../models/cart.model";
import Product from "../models/product.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

const uid = (req: Request): string => {
  if (!req.user) throw ApiError.unauthorized("Not authenticated");
  return req.user.id;
};

const clampQty = (q: unknown) =>
  Math.min(MAX_QTY, Math.max(1, Math.trunc(Number(q)) || 1));

const checkId = (id: unknown): string => {
  if (typeof id !== "string" || !isValidObjectId(id))
    throw ApiError.badRequest("Invalid product id");
  return id;
};

const getCart = async (userId: string) =>
  (await Cart.findOne({ user: userId })
    .populate("items.product", "title price mrp category images")
    .lean()) ?? { user: userId, items: [] };

export const getMyCart = asyncHandler(async (req, res) => {
  res.json(await getCart(uid(req)));
});

export const addItem = asyncHandler(async (req, res) => {
  const userId = uid(req);
  const productId = checkId(req.body.productId);
  const quantity = clampQty(req.body.quantity);

  if (!(await Product.exists({ _id: productId })))
    throw ApiError.notFound("Product not found");

  const pid = new Types.ObjectId(productId);

  // Already in cart -> increase quantity, capped at MAX_QTY
  const inc = await Cart.updateOne({ user: userId, "items.product": pid }, [
    {
      $set: {
        items: {
          $map: {
            input: "$items",
            as: "i",
            in: {
              $cond: [
                { $eq: ["$$i.product", pid] },
                {
                  product: "$$i.product",
                  quantity: {
                    $min: [MAX_QTY, { $add: ["$$i.quantity", quantity] }],
                  },
                },
                "$$i",
              ],
            },
          },
        },
      },
    },
  ]);

  // Not in cart -> push a new line (creates the cart if missing)
  if (!inc.matchedCount) {
    await Cart.updateOne(
      { user: userId },
      { $push: { items: { product: pid, quantity } } },
      { upsert: true }
    );
  }

  res.status(201).json(await getCart(userId));
});

export const updateItem = asyncHandler(async (req, res) => {
  const userId = uid(req);
  const productId = checkId(req.params.productId);

  const r = await Cart.updateOne(
    { user: userId, "items.product": productId },
    { $set: { "items.$.quantity": clampQty(req.body.quantity) } }
  );
  if (!r.matchedCount) throw ApiError.notFound("Item not in cart");

  res.json(await getCart(userId));
});

export const removeItem = asyncHandler(async (req, res) => {
  const userId = uid(req);
  const productId = checkId(req.params.productId);

  await Cart.updateOne(
    { user: userId },
    { $pull: { items: { product: productId } } }
  );
  res.json(await getCart(userId));
});

export const clearCart = asyncHandler(async (req, res) => {
  const userId = uid(req);
  await Cart.updateOne({ user: userId }, { $set: { items: [] } });
  res.json({ user: userId, items: [] });
});

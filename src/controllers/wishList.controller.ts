import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { Wishlist } from "../models/wishList.model";
import Product from "../models/product.model";

const userId = (req: Request) => (req as any).user.id;

export const getWishlist = async (req: Request, res: Response) => {
  const wishlist = await Wishlist.findOne({ user: userId(req) }).populate(
    "products"
  );
  res.json({ products: wishlist?.products ?? [] });
};

export const addToWishlist = async (req: Request, res: Response) => {
  const { productId } = req.body;
  if (!isValidObjectId(productId))
    return res.status(400).json({ message: "Invalid productId" });
  if (!(await Product.exists({ _id: productId })))
    return res.status(404).json({ message: "Product not found" });

  const wishlist = await Wishlist.findOneAndUpdate(
    { user: userId(req) },
    { $addToSet: { products: productId } }, // no duplicates
    { upsert: true, new: true }
  );
  res.status(200).json({ products: wishlist.products });
};

export const removeFromWishlist = async (req: Request, res: Response) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId))
    return res.status(400).json({ message: "Invalid productId" });

  const wishlist = await Wishlist.findOneAndUpdate(
    { user: userId(req) },
    { $pull: { products: productId } },
    { new: true }
  );
  res.status(200).json({ products: wishlist?.products ?? [] });
};

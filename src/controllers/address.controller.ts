import type { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { Address } from "../models/Address.model";

const MAX_ADDRESSES = 10;
const FIELDS = ["name", "phone", "line1", "line2", "city", "state", "pincode"] as const;

// Only whitelisted fields; the user id always comes from the token, never the body.
const pick = (body: any) =>
  Object.fromEntries(FIELDS.filter((k) => body?.[k] !== undefined).map((k) => [k, body[k]]));

const uid = (req: Request) => (req as any).user.id as string;

const fail = (res: Response, e: any) => {
  if (e?.name === "ValidationError")
    return res.status(400).json({ message: Object.values<any>(e.errors)[0].message || "Invalid address" });
  console.error(e);
  return res.status(500).json({ message: "Something went wrong." });
};

export const listAddresses = async (req: Request, res: Response) => {
  try {
    const data = await Address.find({ user: uid(req) }).sort({ createdAt: -1 }).lean();
    res.json({ data });
  } catch (e) {
    fail(res, e);
  }
};

export const createAddress = async (req: Request, res: Response) => {
  try {
    if ((await Address.countDocuments({ user: uid(req) })) >= MAX_ADDRESSES)
      return res.status(400).json({ message: `You can save up to ${MAX_ADDRESSES} addresses.` });
    const data = await Address.create({ ...pick(req.body), user: uid(req) });
    res.status(201).json({ data });
  } catch (e) {
    fail(res, e);
  }
};

export const updateAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid address id." });
    const data = await Address.findOneAndUpdate(
      { _id: id, user: uid(req) },
      pick(req.body),
      { new: true, runValidators: true }
    );
    if (!data) return res.status(404).json({ message: "Address not found." });
    res.json({ data });
  } catch (e) {
    fail(res, e);
  }
};

export const deleteAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid address id." });
    const r = await Address.deleteOne({ _id: id, user: uid(req) });
    if (!r.deletedCount) return res.status(404).json({ message: "Address not found." });
    res.json({ data: { id } });
  } catch (e) {
    fail(res, e);
  }
};

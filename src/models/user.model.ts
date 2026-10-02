import { Schema, model, type InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    // Normalized E.164, e.g. +919876543210
    phone: { type: String, required: true, unique: true, trim: true },
    name: { type: String, trim: true },
    // Optional; sparse unique index allows many users without an email
    email: { type: String, trim: true, lowercase: true, unique: true, sparse: true },
    lastLoginAt: { type: Date },
  },
  { timestamps: true },
);

export type UserDoc = InferSchemaType<typeof userSchema>;
export const User = model("User", userSchema);

export const toPublicUser = (u: {
  _id: unknown;
  phone: string;
  name?: string | null;
  email?: string | null;
}) => ({
  id: String(u._id),
  phone: u.phone,
  name: u.name ?? null,
  email: u.email ?? null,
});
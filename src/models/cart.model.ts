import { Schema, model, Types } from "mongoose";

export const MAX_QTY = 10;

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    items: [
      {
        _id: false,
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, min: 1, max: MAX_QTY, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = model("Cart", cartSchema);
export { Types };
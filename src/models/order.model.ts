import { Schema, model, Types } from "mongoose";

const itemSchema = new Schema(
  {
    product: { type: Types.ObjectId, ref: "Product" }, // absent for custom keychain
    title: String,
    image: String,
    price: Number, // snapshot, rupees
    quantity: Number,
    custom: { name: String, font: String, color: String },
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true, index: true },
    items: [itemSchema],
    address: {
      name: String,
      phone: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      pincode: String,
    },
    notes: { type: String, maxlength: 500 },
    source: {
      type: String,
      enum: ["cart", "buyNow", "custom"],
      required: true,
    },
    subtotal: Number,
    shipping: Number,
    total: Number, // rupees
    status: {
      type: String,
      enum: ["pending", "paid", "failed", "cancelled"],
      default: "pending",
      index: true,
    },
    razorpayOrderId: { type: String, unique: true, sparse: true },
    razorpayPaymentId: String,
    paidAt: Date,
  },
  { timestamps: true }
);

export const Order = model("Order", orderSchema);

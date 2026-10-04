import { Schema, model, type InferSchemaType } from "mongoose";

const addressSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 80 },
    phone: { type: String, required: true, match: /^\d{10}$/ },
    line1: { type: String, required: true, trim: true, maxlength: 200 },
    line2: { type: String, trim: true, maxlength: 200, default: "" },
    city: { type: String, required: true, trim: true, maxlength: 80 },
    state: { type: String, required: true, trim: true, maxlength: 80 },
    pincode: { type: String, required: true, match: /^\d{6}$/ },
  },
  { timestamps: true }
);

export type AddressDoc = InferSchemaType<typeof addressSchema>;
export const Address = model("Address", addressSchema);

import { Schema, model, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

const colorSchema = new Schema(
  {
    name: { type: String, required: true },
    hex: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true }, // lighting | gaming | rc
    price: { type: Number, required: true, min: 0 },
    images: { type: [String], default: [] },
    description: { type: String, default: "" },
    materials: { type: [String], default: [] },
    sizes: { type: [Schema.Types.Mixed], default: [] },
    specs: { type: Schema.Types.Mixed, default: {} },
    colors: { type: [colorSchema], default: [] },
    hue: { type: Number, default: 0 },
    sold: { type: Number, default: 0, min: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export type ProductDoc = InferSchemaType<typeof productSchema>;
export default mongoose.model("Product", productSchema);

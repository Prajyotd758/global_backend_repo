import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import Product from "../models/product.model";

const DEFAULT_LIMIT = 12;
const MAX_LIMIT = 50;

const SORTS = {
  popular: { sold: -1, _id: 1 },
  rated: { rating: -1, _id: 1 },
  low: { price: 1, _id: 1 },
  high: { price: -1, _id: 1 },
} as const;

type SortKey = keyof typeof SORTS;

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Returns undefined for missing / empty / non-numeric values
const toNumber = (v: unknown): number | undefined => {
  if (typeof v !== "string" || v.trim() === "") return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
};

// GET /api/products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const page = Math.max(Math.floor(toNumber(req.query.page) ?? 1), 1);
    const limit = Math.min(
      Math.max(Math.floor(toNumber(req.query.limit) ?? DEFAULT_LIMIT), 1),
      MAX_LIMIT
    );

    const sort = typeof req.query.sort === "string" ? req.query.sort : "";
    const sortKey: SortKey = sort in SORTS ? (sort as SortKey) : "popular";

    const filter: Record<string, any> = {};

    const category = req.query.category;
    if (typeof category === "string" && category && category !== "all") {
      filter.category = category;
    }

    const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
    if (q) filter.title = { $regex: escapeRegex(q), $options: "i" };

    const minPrice = toNumber(req.query.minPrice);
    const maxPrice = toNumber(req.query.maxPrice);
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};
      if (minPrice !== undefined) filter.price.$gte = minPrice;
      if (maxPrice !== undefined) filter.price.$lte = maxPrice;
    }

    const minRating = toNumber(req.query.minRating);
    if (minRating !== undefined) filter.rating = { $gte: minRating };

    if (req.query.inStock === "true") filter.inStock = true;

    const [products, total] = await Promise.all([
      Product.find(filter)
        .sort(SORTS[sortKey])
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Product.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    res.json({
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (err) {
    console.error("getProducts failed:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// GET /api/products/categories
export const getCategoryCounts = async (_req: Request, res: Response) => {
  try {
    const rows = await Product.aggregate<{ _id: string; count: number }>([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    const categories = rows.map((r) => ({ id: r._id, count: r.count }));
    const total = categories.reduce((sum, c) => sum + c.count, 0);

    res.json({ total, categories });
  } catch (err) {
    console.error("getCategoryCounts failed:", err);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};

// GET /api/products/:id
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const product = await Product.findById(id).lean();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ product });
  } catch (err) {
    console.error("getProductById failed:", err);
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

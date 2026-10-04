import { Router } from "express";
import {
  getProducts,
  getCategoryCounts,
  getProductById,
} from "../controllers/products.controller";

const router = Router();

// GET /api/products?page=1&limit=12&category=gaming&q=stand
//     &sort=popular|rated|low|high&minPrice=300&maxPrice=600
//     &minRating=4.5&inStock=true
router.get("/", getProducts);

// GET /api/products/categories  -> { total, categories: [{ id, count }] }
router.get("/categories", getCategoryCounts);

router.get("/:id", getProductById);

export default router;

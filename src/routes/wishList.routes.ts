import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/wishList.controller";

const router = Router();
router.use(requireAuth);

router.get("/", getWishlist);
router.post("/", addToWishlist); // body: { productId }
router.delete("/:productId", removeFromWishlist);

export default router;

import { Router } from "express";
import * as cart from "../controllers/cart.controller";
import { requireAuth } from "../middleware/auth";

const router = Router();
router.use(requireAuth);

router.get("/", cart.getMyCart);
router.post("/items", cart.addItem);
router.patch("/items/:productId", cart.updateItem);
router.delete("/items/:productId", cart.removeItem);
router.delete("/", cart.clearCart);

export default router;

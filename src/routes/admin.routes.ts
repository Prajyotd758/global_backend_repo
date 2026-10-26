import { Router } from "express";
import { requireAdmin } from "../middleware/adminAuth";
import { getAllOrders, patchOrder } from "../controllers/admin.controller";

const router = Router();
router.use(requireAdmin);
router.get("/orders", getAllOrders);
router.patch("/orders/:id", patchOrder);
export default router;

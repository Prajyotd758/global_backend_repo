import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import {
  createOrder,
  verifyPayment,
  getOrder,
  listOrders,
} from "../controllers/order.controller";

const r = Router();
r.use(requireAuth);
r.post("/", createOrder);
r.post("/verify", verifyPayment); // before "/:id"
r.get("/", listOrders);
r.get("/:id", getOrder);
export default r;

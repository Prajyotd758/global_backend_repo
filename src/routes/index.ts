import { Router } from "express";
import authRoutes from "./auth.routes";

const router = Router();

router.get("/ping", (_req, res) => {
  res.json({ success: true, message: "pong" });
});

router.use("/auth", authRoutes);

// Coming next:
// router.use("/sessions", sessionRoutes);
// router.use("/cart", cartRoutes);
// router.use("/wishlist", wishlistRoutes);
// router.use("/orders", orderRoutes);

export default router;

import { Router } from "express";
import authRoutes from "./auth.routes";
import productRoutes from "./products.route";
import cartRoutes from "./cart.routes";
import wishlistRoutes from "./wishList.routes";
import address from "./address.routes";
import profile from "./profile.routes";

const router = Router();

router.get("/ping", (_req, res) => {
  res.json({ success: true, message: "pong" });
});

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/addresses", address);
router.use("/profile", profile);

// Coming next:
// router.use("/sessions", sessionRoutes);
// router.use("/orders", orderRoutes);

export default router;

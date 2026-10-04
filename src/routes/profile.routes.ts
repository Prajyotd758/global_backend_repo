import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import {
  getMyProfile,
  updateMyProfile,
} from "../controllers/profile.controller";

const router = Router();
router.get("/me", requireAuth, getMyProfile);
router.patch("/me", requireAuth, updateMyProfile);
export default router;

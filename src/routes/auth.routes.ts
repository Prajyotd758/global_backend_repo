import { Router } from "express";
import * as auth from "../controllers/auth.controller";
import { requireAuth } from "../middleware/auth";
import { requireInternalKey } from "../middleware/internalKey";
import {
  loginLimiter,
  registerLimiter,
  checkPhoneLimiter,
} from "../middleware/rateLimit";
import { validate } from "../middleware/validate";
import {
  loginSchema,
  refreshSchema,
  registerSchema,
  checkPhoneSchema,
} from "../validators/auth.schema";

const router = Router();

// Public: called from the frontend with the user's details
router.post(
  "/register",
  registerLimiter,
  validate(registerSchema),
  auth.register
);

// Called by NextAuth on the Next.js server (needs x-internal-key)
router.post(
  "/login",
  requireInternalKey,
  loginLimiter,
  validate(loginSchema),
  auth.login
);
router.post(
  "/refresh",
  requireInternalKey,
  validate(refreshSchema),
  auth.refresh
);

// routes/auth.routes.ts (also import checkPhoneSchema and checkPhoneLimiter)
router.post(
  "/check-phone",
  checkPhoneLimiter,
  validate(checkPhoneSchema),
  auth.checkPhone
);

// Called with the user's access token
router.post("/logout", requireAuth, auth.logout);
router.get("/me", requireAuth, auth.me);

export default router;

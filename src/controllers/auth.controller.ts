import { clientMeta } from "../middleware/internalKey";
import * as authService from "../services/auth.service";
import { asyncHandler } from "../utils/asyncHandler";

export const register = asyncHandler(async (req, res) => {
  const user = await authService.registerUser(req.body);
  res.status(201).json({ success: true, data: { user } });
});

export const login = asyncHandler(async (req, res) => {
  const data = await authService.loginWithPhone(
    req.body.phone,
    clientMeta(req)
  );
  res.status(200).json({ success: true, data });
});

export const refresh = asyncHandler(async (req, res) => {
  const data = await authService.refreshSession(
    req.body.refreshToken,
    clientMeta(req)
  );
  res.status(200).json({ success: true, data });
});

export const logout = asyncHandler(async (req, res) => {
  await authService.logoutSession(req.sessionId!, req.user!.id);
  res.status(200).json({ success: true });
});

export const me = asyncHandler(async (req, res) => {
  const user = await authService.getCurrentUser(req.user!.id);
  res.status(200).json({ success: true, data: { user } });
});

// controllers/auth.controller.ts
export const checkPhone = asyncHandler(async (req, res) => {
  const exists = await authService.phoneExists(req.body.phone);
  res.status(200).json({ success: true, data: { exists } });
});

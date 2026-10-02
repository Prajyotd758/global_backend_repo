import type { RequestHandler } from "express";
import { env } from "../config/env";
import { ApiError } from "../utils/ApiError";
import { safeEqual } from "../utils/hash";

/**
 * Only the Next.js server (NextAuth) may call login/refresh. It sends the shared
 * secret in `x-internal-key`. Browsers never see this key.
 */
export const requireInternalKey: RequestHandler = (req, _res, next) => {
  const key = req.get("x-internal-key");
  if (!key || !safeEqual(key, env.INTERNAL_API_KEY)) {
    return next(ApiError.forbidden("Invalid internal key"));
  }
  next();
};

/** Real end-user IP / UA, forwarded by the Next.js server (trusted because the key checked out). */
export const clientMeta = (req: Parameters<RequestHandler>[0]) => ({
  ip: req.get("x-client-ip") ?? req.ip,
  userAgent: req.get("x-client-user-agent") ?? req.get("user-agent") ?? undefined,
});

import rateLimit from "express-rate-limit";
import { clientMeta } from "./internalKey";

// Login traffic arrives from the Next.js server, so key on the forwarded
// end-user IP (not req.ip, which would be the same for every user).
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => clientMeta(req).ip ?? "unknown",
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many login attempts. Try again later.",
    },
  },
});

// Register is called straight from the browser, so the plain req.ip is the real client
// (the x-client-ip header is not trusted here because there is no internal key).
export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many sign-up attempts. Try again later.",
    },
  },
});

// middleware/rateLimit.ts
export const checkPhoneLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: "RATE_LIMITED",
      message: "Too many attempts. Try again later.",
    },
  },
});

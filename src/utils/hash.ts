import { createHash, randomBytes, timingSafeEqual } from "crypto";

export const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

/** Opaque random token (used for refresh tokens). Only its hash is stored in the DB. */
export const generateToken = (bytes = 48) => randomBytes(bytes).toString("base64url");

/** Constant-time string comparison. */
export function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

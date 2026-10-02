import { z } from "zod";

/**
 * Accepts: 9876543210, 09876543210, 919876543210, +91 98765 43210, 98765-43210
 * Returns: +919876543210 (or null if not a valid Indian mobile number).
 * Indian mobiles are 10 digits starting with 6-9.
 */
export function normalizeIndianMobile(raw: string): string | null {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  else if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return /^[6-9]\d{9}$/.test(d) ? `+91${d}` : null;
}

const phone = z.string().transform((value, ctx) => {
  const normalized = normalizeIndianMobile(value);
  if (!normalized) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Enter a valid 10-digit Indian mobile number",
    });
    return z.NEVER;
  }
  return normalized;
});

// Optional email: an empty string from a form field counts as "not provided"
const optionalEmail = z
  .union([
    z.literal(""),
    z.string().trim().toLowerCase().email("Enter a valid email"),
  ])
  .optional()
  .transform((v) => v || undefined);

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short")
    .max(80, "Name is too long"),
  phone,
  email: optionalEmail,
});

export const loginSchema = z.object({ phone });

export const refreshSchema = z.object({
  refreshToken: z.string().min(20),
});

// validators/auth.schema.ts
export const checkPhoneSchema = z.object({ phone });

import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(5000),
  MONGODB_URI: z.string().min(1, "MONGODB_URI is required"),
  JWT_ACCESS_SECRET: z.string().min(32, "JWT_ACCESS_SECRET must be at least 32 chars"),
  // Shared secret between the Next.js server (NextAuth) and this API.
  INTERNAL_API_KEY: z.string().min(32, "INTERNAL_API_KEY must be at least 32 chars"),
  ACCESS_TOKEN_TTL_MINUTES: z.coerce.number().default(15),
  REFRESH_TOKEN_TTL_DAYS: z.coerce.number().default(30),
  CLIENT_ORIGIN: z.string().default("http://localhost:3000"),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables:");
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = {
  ...parsed.data,
  isProd: parsed.data.NODE_ENV === "production",
  clientOrigins: parsed.data.CLIENT_ORIGIN.split(",").map((o) => o.trim()),
  accessTokenTtlSec: parsed.data.ACCESS_TOKEN_TTL_MINUTES * 60,
  refreshTokenTtlMs: parsed.data.REFRESH_TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000,
};

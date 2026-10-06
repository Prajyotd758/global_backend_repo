import type { CorsOptions } from "cors";
import { env } from "./env";

export const corsOptions: CorsOptions = {
  origin(origin, cb) {
    // Non-browser clients (curl, Postman, server-to-server) send no Origin
    if (!origin) return cb(null, true);
    const o = origin.replace(/\/$/, "");
    if (env.clientOrigins.includes(o)) return cb(null, true);
    console.warn(`[cors] blocked origin: ${o}`); // shows up in Render logs
    cb(null, false); // deny quietly, don't throw
  },
  credentials: true, // httpOnly refresh-token cookie
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-internal-key"],
  maxAge: 86400,
};
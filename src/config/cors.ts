import type { CorsOptions } from "cors";
import { env } from "./env";

export const corsOptions: CorsOptions = {
  origin(origin, cb) {
    // Allow non-browser clients (curl, Postman) which send no Origin header
    if (!origin || env.clientOrigins.includes(origin)) return cb(null, true);
    cb(new Error(`Origin ${origin} not allowed by CORS`));
  },
  credentials: true, // needed for the httpOnly refresh-token cookie
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/cors";
import { env } from "./config/env";
import routes from "./routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/error";

// No listen() here, so the same app can run as a normal server or be
// wrapped as a serverless function (Vercel) later.
export const app = express();

app.set("trust proxy", 1); // correct client IPs behind Vercel / a reverse proxy
app.use(helmet());
app.use(cors(corsOptions));
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());
if (!env.isProd) app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.use("/api/v1", routes);

app.use(notFound);
app.use(errorHandler);

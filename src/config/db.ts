import mongoose from "mongoose";
import { env } from "./env";
import { logger } from "../utils/logger";

// Cache the connection on `global` so serverless cold starts / hot reloads
// reuse it instead of opening a new connection every time.
const globalCache = global as typeof globalThis & {
  __mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
};
const cache = (globalCache.__mongoose ??= { conn: null, promise: null });

export async function connectDB(): Promise<typeof mongoose> {
  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    mongoose.set("strictQuery", true);
    cache.promise = mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10_000,
      maxPoolSize: 10,
    });
  }

  try {
    cache.conn = await cache.promise;
    logger.info("MongoDB connected");
    return cache.conn;
  } catch (err) {
    cache.promise = null;
    throw err;
  }
}

export async function disconnectDB(): Promise<void> {
  if (cache.conn) {
    await mongoose.disconnect();
    cache.conn = null;
    cache.promise = null;
  }
}

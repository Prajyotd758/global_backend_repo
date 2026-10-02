import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { ApiError } from "../utils/ApiError";
import { env } from "../config/env";
import { logger } from "../utils/logger";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      error: { code: err.code, message: err.message, details: err.details },
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid request data",
        details: err.flatten().fieldErrors,
      },
    });
  }

  // Mongo duplicate key (e.g. email already registered)
  if (err && typeof err === "object" && (err as { code?: number }).code === 11000) {
    return res.status(409).json({
      success: false,
      error: { code: "DUPLICATE", message: "Resource already exists" },
    });
  }

  logger.error(err);
  return res.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_ERROR",
      message: env.isProd ? "Something went wrong" : String((err as Error)?.message ?? err),
    },
  });
};

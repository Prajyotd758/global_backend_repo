import type { RequestHandler } from "express";
import type { ZodTypeAny } from "zod";

/** Validates + replaces req.body with the parsed (normalized) value. ZodError -> error middleware. */
export const validate =
  (schema: ZodTypeAny): RequestHandler =>
  (req, _res, next) => {
    req.body = schema.parse(req.body);
    next();
  };

import { Request, Response, NextFunction } from "express";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const token = (req.headers.authorization ?? "").replace("Bearer ", "");
  if (!process.env.ADMIN_PASSWORD || token !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({
      success: false,
      error: { code: "UNAUTHORIZED", message: "Unauthorized" },
    });
  next();
}
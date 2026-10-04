import { Request, Response } from "express";
import { getProfile , updateProfile} from "../services/profile.service";

export async function getMyProfile(req: Request, res: Response) {
  const profile = await getProfile(req.user!.id);
  if (!profile) return res.status(404).json({ message: "User not found" });
  res.json(profile);
}

export async function updateMyProfile(req: Request, res: Response) {
  const name = String(req.body?.name ?? "").trim();
  if (name.length < 2 || name.length > 60)
    return res.status(400).json({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid input",
        details: { name: ["Name must be 2–60 characters"] },
      },
    });
  const user = await updateProfile(req.user!.id, name);
  if (!user)
    return res.status(404).json({
      success: false,
      error: { code: "NOT_FOUND", message: "User not found" },
    });
  res.json(user);
}

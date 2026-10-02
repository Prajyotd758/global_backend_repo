import { Session } from "../models/session.model";
import { verifyAccessToken, type AccessPayload } from "../services/token.service";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

/**
 * Requires `Authorization: Bearer <accessToken>`. Besides checking the JWT, it confirms the
 * session still exists in the DB, so logout takes effect immediately.
 */
export const requireAuth = asyncHandler(async (req, _res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) throw ApiError.unauthorized("Missing access token");

  let payload: AccessPayload;
  try {
    payload = verifyAccessToken(header.slice(7));
  } catch {
    throw ApiError.unauthorized("Invalid or expired access token");
  }

  const active = await Session.exists({
    _id: payload.sid,
    userId: payload.sub,
    revokedAt: null,
    expiresAt: { $gt: new Date() },
  });
  if (!active) throw ApiError.unauthorized("Session ended");

  req.user = { id: payload.sub };
  req.sessionId = payload.sid;
  next();
});

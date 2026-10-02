import { env } from "../config/env";
import { Session } from "../models/session.model";
import { User, toPublicUser } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { generateToken, sha256 } from "../utils/hash";
import { signAccessToken } from "./token.service";

export interface ClientMeta {
  userAgent?: string;
  ip?: string;
}

type UserLike = {
  _id: unknown;
  phone: string;
  name?: string | null;
  email?: string | null;
};

function tokenResponse(
  user: UserLike,
  sessionId: string,
  refreshToken: string
) {
  return {
    user: toPublicUser(user),
    accessToken: signAccessToken(String(user._id), sessionId),
    accessTokenExpiresAt: Date.now() + env.accessTokenTtlSec * 1000,
    refreshToken,
  };
}

/** Creates a user from the details the frontend sends. Does NOT log them in. */
export async function registerUser(input: {
  name: string;
  phone: string;
  email?: string;
}) {
  try {
    const user = await User.create(input);
    return toPublicUser(user);
  } catch (err) {
    if ((err as { code?: number }).code === 11000) {
      const field = Object.keys(
        (err as { keyPattern?: Record<string, unknown> }).keyPattern ?? {}
      )[0];
      throw ApiError.conflict(
        field === "email"
          ? "This email is already registered"
          : "This phone number is already registered"
      );
    }
    throw err;
  }
}

/**
 * Phone-only login (no OTP yet) for an already-registered user.
 * When OTP is added, the verification step goes right before the user lookup.
 */
export async function loginWithPhone(phone: string, meta: ClientMeta) {
  const user = await User.findOneAndUpdate(
    { phone },
    { $set: { lastLoginAt: new Date() } },
    { new: true }
  );
  if (!user)
    throw ApiError.notFound(
      "No account found for this number. Please register first."
    );

  const refreshToken = generateToken();
  const session = await Session.create({
    userId: user._id,
    refreshTokenHash: sha256(refreshToken),
    userAgent: meta.userAgent,
    ip: meta.ip,
    expiresAt: new Date(Date.now() + env.refreshTokenTtlMs),
  });

  return tokenResponse(user, session.id, refreshToken);
}

/** Exchanges a valid refresh token for a new access token + a rotated refresh token. */
export async function refreshSession(refreshToken: string, meta: ClientMeta) {
  const session = await Session.findOne({
    refreshTokenHash: sha256(refreshToken),
    revokedAt: null,
    expiresAt: { $gt: new Date() },
  });
  if (!session) throw ApiError.unauthorized("Invalid or expired session");

  const user = await User.findById(session.userId);
  if (!user) throw ApiError.unauthorized("User no longer exists");

  const newRefreshToken = generateToken();
  session.refreshTokenHash = sha256(newRefreshToken);
  session.lastUsedAt = new Date();
  session.expiresAt = new Date(Date.now() + env.refreshTokenTtlMs); // sliding expiry
  if (meta.userAgent) session.userAgent = meta.userAgent;
  if (meta.ip) session.ip = meta.ip;
  await session.save();

  return tokenResponse(user, session.id, newRefreshToken);
}

export async function logoutSession(sessionId: string, userId: string) {
  await Session.updateOne(
    { _id: sessionId, userId },
    { $set: { revokedAt: new Date() } }
  );
}

export async function getCurrentUser(userId: string) {
  const user = await User.findById(userId);
  if (!user) throw ApiError.unauthorized("User no longer exists");
  return toPublicUser(user);
}

// services/auth.service.ts
export async function phoneExists(phone: string) {
  return !!(await User.exists({ phone }));
}
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { ApiError } from "../utils/ApiError";

export interface AccessPayload {
  sub: string; // user id
  sid: string; // session id
}

export function signAccessToken(userId: string, sessionId: string): string {
  return jwt.sign({ sid: sessionId }, env.JWT_ACCESS_SECRET, {
    subject: userId,
    expiresIn: env.accessTokenTtlSec,
    algorithm: "HS256",
  });
}

export function verifyAccessToken(token: string): AccessPayload {
  const payload = jwt.verify(token, env.JWT_ACCESS_SECRET, { algorithms: ["HS256"] });
  if (typeof payload === "string" || !payload.sub || typeof payload["sid"] !== "string") {
    throw ApiError.unauthorized("Invalid token");
  }
  return { sub: payload.sub, sid: payload["sid"] as string };
}

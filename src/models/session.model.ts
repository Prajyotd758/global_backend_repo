import { Schema, model, Types, type InferSchemaType } from "mongoose";

const sessionSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    // SHA-256 of the current refresh token (the raw token is never stored)
    refreshTokenHash: { type: String, required: true, unique: true },
    userAgent: { type: String },
    ip: { type: String },
    lastUsedAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
    revokedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

// Mongo deletes the document automatically once expiresAt has passed
sessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export type SessionDoc = InferSchemaType<typeof sessionSchema>;
export const Session = model("Session", sessionSchema);
export { Types };

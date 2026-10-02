export {};

declare global {
  namespace Express {
    interface Request {
      /** Set by requireAuth middleware */
      user?: { id: string };
      /** Set by requireAuth middleware (id of the Session document) */
      sessionId?: string;
    }
  }
}

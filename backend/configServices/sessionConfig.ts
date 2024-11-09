import session from "express-session";
import { pool } from "./dbConfig.js";
import pgSession from "connect-pg-simple";
import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });
const isLocalServer = process.env.IS_LOCAL_SERVER === "true";
const store = new (pgSession(session))({
  pool: pool,
});

// configure session data
declare module "express-session" {
  interface SessionData {
    accountUid?: string;
  }
}

export const sessionMiddleware = session({
  store: store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  rolling: true,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: isLocalServer ? "strict" : "none",
    secure: "auto",
    partitioned: true,
    maxAge: 1000 * 60 * 60 * 24, //24 hours, reset on activity
  },
});

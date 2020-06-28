const {
  NODE_ENV,
  PORT,
  SESSION_SECRET,
  SESSION_KEY,
  TOKEN_SECRET,
} = process.env;

if (!NODE_ENV) {
  throw new Error("NODE_ENV variable is not set.");
}

export const isDev = () => NODE_ENV === "development";
export const isTest = () => NODE_ENV === "test";
export const isProd = () => NODE_ENV === "production";
export const env = NODE_ENV;
export const port = PORT || 2935;
export const sessionSecret = SESSION_SECRET || "dev_secret";
export const sessionKey = SESSION_KEY || "criticalstyles";
export const tokenSecret = TOKEN_SECRET || "asdfw9487tg";
export const publicDomain = isDev()
  ? "http://localhost:3001"
  : "https://criticalstyles.com";

const config = {
  isDev,
  isTest,
  isProd,
  env,
  port,
  sessionKey,
  sessionSecret,
  publicDomain,
};

export default config;

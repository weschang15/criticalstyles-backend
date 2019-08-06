const { NODE_ENV, PORT } = process.env;

if (!NODE_ENV) {
  throw new Error("NODE_ENV variable is not set.");
}

export const isDev = () => NODE_ENV === "development";
export const isTest = () => NODE_ENV === "test";
export const isProd = () => NODE_ENV === "production";
export const env = NODE_ENV;
export const port = PORT || 2935;

const config = {
  isDev,
  isTest,
  isProd,
  env,
  port
};

export default config;

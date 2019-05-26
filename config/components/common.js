const { NODE_ENV, PORT } = process.env;

if (!NODE_ENV) {
  throw new Error("NODE_ENV variable is not set.");
}

const config = {
  isDev: () => NODE_ENV === "development",
  isTest: () => NODE_ENV === "test",
  isProd: () => NODE_ENV === "production",
  env: NODE_ENV,
  port: PORT || 2935
};

export default config;

const config = {
  redis: {
    development: {
      host: "localhost",
      port: 6379,
      retryStrategy: times => Math.max(times * 100, 3000)
    },
    production: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS,
      retryStrategy: times => Math.max(times * 100, 3000)
    }
  }
};

export default config;

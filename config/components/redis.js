const config = {
  redis: {
    development: {
      host: "localhost",
      port: 6379,
      retryStrategy: times => Math.max(times * 100, 3000)
    },
    production: {
      url: process.env.REDIS_URL,
      retryStrategy: times => Math.max(times * 100, 3000)
    }
  }
};

export default config;

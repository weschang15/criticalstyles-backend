const config = {
  cors: {
    development: {
      origin: ["http://localhost:3000"],
      credentials: true
    },
    production: {
      origin: ["https://criticalstyles.com", "https://www.criticalstyles.com"],
      credentials: true
    }
  }
};

export default config;

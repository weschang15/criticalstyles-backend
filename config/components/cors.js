const config = {
  cors: {
    development: {
      origin: ["http://localhost:3000", "http://localhost:3001"],
      credentials: true
    },
    production: {
      origin: [
        "https://criticalstyles.com",
        "https://my.criticalstyles.com",
        "https://www.criticalstyles.com"
      ],
      credentials: true
    }
  }
};

export default config;

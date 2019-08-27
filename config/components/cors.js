const config = {
  cors: {
    development: {
      origin: ["http://localhost:3000", "http://localhost:3001"],
      credentials: true
    },
    production: {
      origin: [/\.criticalstyles\.com$/],
      credentials: true
    }
  }
};

export default config;

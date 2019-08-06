const config = {
  mongo: {
    development: {
      uri: process.env.MONGODB_URI
    },
    production: {
      uri: process.env.MONGODB_URI
    }
  }
};

export default config;

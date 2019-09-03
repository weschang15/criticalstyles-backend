module.exports = {
  apps: [
    {
      name: "API",
      script: "./start.js",
      node_args: "-r esm -r dotenv/config",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "WORKER",
      script: "./worker.js",
      node_args: "-r esm -r dotenv/config",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};

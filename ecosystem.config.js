module.exports = {
  apps: [
    {
      name: "API",
      script: "./start.js",
      node_args: "-r esm -r dotenv/config",
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

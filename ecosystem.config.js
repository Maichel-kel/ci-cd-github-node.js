module.exports = {
  apps: [
    {
      name: "app",
      script: "./index.js", // Update this path if your entry point is different
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}

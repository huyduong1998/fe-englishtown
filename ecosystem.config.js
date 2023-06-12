module.exports = {
  apps: [
    {
      name: "WebApplication",
      script: "./server.js",
      instances: 1,
      exec_mode: "cluster",
      watch: false,
    }
  ]
};

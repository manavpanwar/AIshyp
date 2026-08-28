module.exports = {
  apps: [
    {
      name: "aishyp",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 7878,
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 7878,
      },
    },
  ],
};

module.exports = {
  apps: [
    {
      name: 'showwcase-next-project',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

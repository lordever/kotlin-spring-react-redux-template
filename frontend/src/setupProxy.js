const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const target = process.env.REACT_APP_API_PROXY || 'http://localhost:8080/api';

  console.log(`[setupProxy] INIT, forwarding /api/* -> ${target}`);

  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
};
const proxy = [
  {
    context: '/api',
    target: 'http://localhost:56911',
    secure: false,
    logLevel: 'debug',
    pathRewrite :{'^/api' : ''}
  }
];
module.exports = proxy;
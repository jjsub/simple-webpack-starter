var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  // Here we are asking strip-loader to remove any console.log statements
  // from our build. WebpackStripLoader.loader() takes any number of arguments.
  loader: WebpackStripLoader.loader('console.log', 'console.info')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;

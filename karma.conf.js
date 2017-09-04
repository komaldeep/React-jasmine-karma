var webpack = require('webpack');
var webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome', 'Chrome_without_security'],
    singleRun: true,
    frameworks: [ 'jasmine' ],
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true //don't spam console when running in karma
    }
  });
};
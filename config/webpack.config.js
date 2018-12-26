'use strict';

const fs = require('fs');
const path = require('path');
const paths = require('./paths');

const envConfigMap = {
  development: 'webpack.config.dev.js',
  production: 'webpack.config.prod.js',
  server: 'webpackDevServer.config.js',
};

module.exports = function(type) {
  const file = envConfigMap[type];

  if (!file) {
    throw new Error('Unkowning environment.');
  }

  let config = require(path.join(__dirname, './', file));
  const overrideFile = path.join(paths.appPath, 'webpack.overrides.js');

  if (fs.existsSync(overrideFile)) {
    const overrideFn = require(overrideFile);

    if (type === 'server') {
      return function(proxy, allowedHost) {
        config = config(proxy, allowedHost);
        overrideFn[type] &&
          overrideFn[type](config, { paths, proxy, allowedHost });
        return config;
      };
    }

    overrideFn[type] && overrideFn[type](config, { paths });
  }

  return config;
};

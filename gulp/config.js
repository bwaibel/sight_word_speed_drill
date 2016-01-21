var _ = require('lodash');

var envs = {
  default: {
    // default config goes here
  },
  production: {
    // production goes here
  }
}

module.exports = {
  switch:function(env) {
    this.env = env;
    _.extend(this, envs.default, envs[env]);
  },
  env: 'development'
}

var auth = require('./auth')
var lfRequire = require('livefyre-require');

// Exports .require, .define, .requirejs
exports = module.exports = lfRequire;

lfRequire.define('auth', function () {
    return auth;
});

// TODO: Add other Livefyre.things on exports

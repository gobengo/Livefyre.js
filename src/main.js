var auth = require('livefyre-auth');
var lfRequire = require('livefyre-require');

// Exports .require, .define, .requirejs
exports = module.exports = lfRequire;

exports['livefyre-auth'] = auth;

lfRequire.define('auth', function () {
    return auth;
});

// maybe: Add other Livefyre.things on exports

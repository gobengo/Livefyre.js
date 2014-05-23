var auth = require('livefyre-auth');
var lfRequire = require('livefyre-require');

// Exports .require, .define, .requirejs
exports = module.exports = lfRequire;
exports['livefyre-auth'] = auth;

// maybe: Add other Livefyre.things on exports

var auth = require('auth');
var authLivefyre = require('auth-livefyre');

authLivefyre.plugin(auth);

module.exports = auth;

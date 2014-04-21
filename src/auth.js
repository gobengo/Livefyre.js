var auth = require('auth');
var authLivefyre = require('auth-livefyre');

auth.livefyre = authLivefyre;

authLivefyre.plugin(auth);

module.exports = auth;

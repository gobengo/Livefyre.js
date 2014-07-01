var auth = require('livefyre-auth');
var lfRequire = require('livefyre-require');
var permalink = require('./check-permalink');

// Exports .require, .define, .requirejs
exports = module.exports = lfRequire;
exports['livefyre-auth'] = auth;
exports.auth = auth;

// If this is run on a page with a permalink fragment, get streamhub-permalink
var contentPermalink = permalink.get();
if (contentPermalink) {
    permalink.load(contentPermalink);
}

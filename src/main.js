var auth = require('livefyre-auth');
var lfRequire = require('livefyre-require');
var permalink = require('./check-permalink');

// Exports .require, .define, .requirejs
var LivefyreJS = exports = module.exports = lfRequire;
// TODO: destroy dis
exports['livefyre-auth'] = auth;
exports.auth = auth;
// This property can be checked to see if Livefyre.js is on the page.
exports.lfjs = true;

// extend to add .require, .define, .requirejs
(function (sub, base) {
    for (var methodName in base) {
        if (base.hasOwnProperty(methodName)) {
            sub[methodName] = base[methodName];
        }
    }
})(LivefyreJS, lfRequire);

// decorate the require function to return livefyre-auth when "auth" is asked for
LivefyreJS.require = (function (require) {
    return function (deps, callback, errback) {
        var authIndex = -1;
        for (var i = 0; i < deps.length; i++) {
            if (/auth$|auth#/.test(deps[i])) {
                authIndex = i;
                break;
            }
        }
        function spliceAuthModule() {
            if (authIndex > -1) {
                Array.prototype.splice.call(arguments, authIndex, 0, auth);
            }
            callback.apply(this, arguments);
        }
        if (authIndex > -1) {
            deps.splice(authIndex, 1);
        }
        return require(deps, spliceAuthModule, errback);
    }
})(LivefyreJS.require);

// If this is run on a page with a permalink fragment, get streamhub-permalink
var contentPermalink = permalink.get();
if (contentPermalink) {
    permalink.load(contentPermalink);
}

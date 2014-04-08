var Livefyre = require('Livefyre');
var livefyreAuthDelegate = require('auth-livefyre/livefyre-auth-delegate');
var createAuthButton = require('auth/contrib/auth-button');

Livefyre.auth.delegate(livefyreAuthDelegate('http://livefyre.com'));

createAuthButton(Livefyre.auth, document.getElementById('auth-button'));

console.log(Livefyre);

var Livefyre = window.Livefyre = require('Livefyre');

// This is necessary to try out Livefyre.require in this non-built demo.
window.Livefyre = Livefyre;

var livefyreAuthDelegate = require('auth-livefyre/livefyre-auth-delegate');

var auth = require('auth');

auth.delegate(livefyreAuthDelegate('http://livefyre.com'));

Livefyre.require(['livefyre!auth-contrib/0.0.0-pre.0'], function (authContrib) {
    var authLog = authContrib.createLog(auth, document.getElementById('auth-log'));
    authContrib.createButton(auth, document.getElementById('auth-button'), authLog);
});

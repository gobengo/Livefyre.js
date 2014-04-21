console.log(Livefyre);

Livefyre.require(['auth', 'livefyre!auth-contrib/0.0.0-pre.0'], function (auth, authContrib) {
    auth.delegate(auth.livefyre.createDelegate('http://livefyre.com'));
    var authLog = authContrib.createLog(auth, document.getElementById('auth-log'));
    authContrib.createButton(auth, document.getElementById('auth-button'), authLog);
});

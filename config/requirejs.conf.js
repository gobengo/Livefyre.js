require.config({
  paths: {
    base64: 'lib/base64/base64',
    json: 'lib/requirejs-plugins/src/json',
    'event-emitter': 'lib/event-emitter/src/event-emitter',
    inherits: 'lib/inherits/inherits',
    md5: 'lib/js-md5/js/md5',
    sinon: 'lib/sinonjs/sinon',
    chai: 'node_modules/chai/chai',
    debug: 'lib/debug/debug',
    requireLib: 'lib/requirejs/require',
    semver: 'lib/node-semver/semver.browser',
    'text': 'lib/requirejs-plugins/lib/text'
  },
  packages: [{
    name: 'Livefyre',
    location: 'src'
  },{
    name: 'Livefyre-tests',
    location: 'test'
  },{
    name: 'auth',
    location: 'lib/auth/src'
  },{
    name: 'livefyre-auth',
    location: 'lib/livefyre-auth/src'
  },{
    name: 'livefyre-require',
    location: 'lib/livefyre-require/src'
  }],
  shim: {
    'sinon': {
      exports: 'sinon'
    }
  }
});

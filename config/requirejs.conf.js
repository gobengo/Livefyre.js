require.config({
  paths: {
    base64: 'lib/base64/base64',
    json: 'lib/requirejs-plugins/src/json',
    'event-emitter': 'lib/event-emitter/src/event-emitter',
    inherits: 'lib/inherits/inherits',
    md5: 'lib/js-md5/js/md5',
    mout: 'lib/mout/src',
    sinon: 'lib/sinonjs/sinon',
    chai: 'node_modules/chai/chai',
    debug: 'lib/debug/debug',
    requireLib: 'lib/requirejs/require',
    semver: 'lib/node-lite/semver.lite',
    'text': 'lib/requirejs-plugins/lib/text',
    purl: 'lib/purl/purl'
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
  },{
    name: 'streamhub-permalink',
    location: 'lib/streamhub-permalink/src'
  },{
    name: "streamhub-sdk",
    location: "lib/streamhub-sdk/src"
  }],
  shim: {
    'sinon': {
      exports: 'sinon'
    }
  }
});

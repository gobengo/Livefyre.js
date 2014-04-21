require.config({
  paths: {
    base64: 'lib/base64/base64',
    'event-emitter': 'lib/event-emitter/src/event-emitter',
    inherits: 'lib/inherits/inherits',
    md5: 'lib/js-md5/js/md5',
    sinon: 'lib/sinonjs/sinon',
    chai: 'node_modules/chai/chai',
    debug: 'lib/debug/debug',
    'livefyre-require': 'lib/livefyre-require/dist/livefyre-require'
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
    name: 'auth-livefyre',
    location: 'lib/auth-livefyre/src'
  }],
  shim: {
    'sinon': {
      exports: 'sinon'
    }
  }
});

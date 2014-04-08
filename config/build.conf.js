({
  mainConfigFile: 'requirejs.conf.js',
  paths: {
    almond: 'lib/almond/almond'
  },
  baseUrl: '..',
  name: 'Livefyre',
  include: ['almond'],
  out: '../dist/Livefyre.js',
  preserveLicenseComments: false,
  optimize: 'uglify2',
  cjsTranslate: true,
  uglify2: {
    compress: {
      unsafe: true
    },
    mangle: true
  },
  wrap: {
    startFile: 'wrap-start.frag',
    endFile: 'wrap-end.frag'
  },
  generateSourceMaps: true
})

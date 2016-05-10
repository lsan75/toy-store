// Karma configuration
// Generated on Fri Feb 19 2016 16:51:32 GMT+0100 (Romance Standard Time)
var webpackConfig = require('./webpack.test.js')

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'spec.ts', included: true, watched: false }
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec.ts': ['webpack'],
      'www/js/**/*.spec.ts': ['webpack', 'sourcemap'],
      'www/js/**/!(*.spec)+(.ts)': ['coverage', 'webpack', 'sourcemap']
    },

    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunkModules: false,
        colors: true,
        modules: false
      }
    },

    webpackServer: { noInfo: true },

    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'spec',
      'coverage'
    ],

    coverageReporter: {
      reporters: [
        {
          dir: 'reports/coverage/',
          subdir: '.',
          type: 'html'
        },
        {
          dir: 'reports/coverage/',
          subdir: '.',
          type: 'cobertura'
        }, {
          dir: 'reports/coverage/',
          subdir: '.',
          type: 'json'
        }
      ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1
  })
}

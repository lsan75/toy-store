/// <reference path="./typings/browser.d.ts" />

/**
 * Jasmine styles
 */
// import './node_modules/jasmine-core/lib/jasmine-core/jasmine.css'

/**
 *  Import Javascript libraries
 */
import './node_modules/jasmine-core/lib/jasmine-core/jasmine.js'
import './node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js'
import './node_modules/jasmine-core/lib/jasmine-core/boot.js'

/**
 *  Javascript libraries
 */
import 'core-js/es6'
import 'core-js/es7/reflect'

var testing = require('angular2/testing')
var browser = require('angular2/platform/testing/browser')
testing.setBaseTestProviders(
  browser.TEST_BROWSER_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_APPLICATION_PROVIDERS
)
Object.assign(global, testing)

require('zone.js/dist/zone')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/jasmine-patch')

import 'angular2/platform/browser'
import 'angular2/platform/common_dom'
import 'angular2/core'
import 'angular2/common'
import 'angular2/http'
import 'angular2/router'

// Redux
import 'redux/dist/redux'
import 'ng2-redux/lib/index'
import 'redux-thunk/dist/redux-thunk'
import 'redux-logger/src/index'

// RxJS
import 'rxjs/Rx'

/**
 *  Main App
 */
import './www/js/app'

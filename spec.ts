/// <reference path="./typings/index.d.ts" />

/**
 *  Polyfills
 */
require('zone.js/dist/zone')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/jasmine-patch')
require('zone.js/dist/async-test')

import 'core-js/es6'
import 'core-js/es7/reflect'

/**
 * Librairies angular
 */
import '@angular/common'
import '@angular/compiler'
import '@angular/core'
import '@angular/http'
import '@angular/platform-browser'
import '@angular/platform-browser-dynamic'
import '@angular/router-deprecated'

/**
 * Tests configurés pour être lancés dans un browser
 */
var testing = require('@angular/core/testing')
var browser = require('@angular/platform-browser-dynamic/testing')
testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);
Object.assign(global, testing)

// RxJS
import 'rxjs/Rx'

// Import fichiers de spec
var testContext = require.context('./www', true, /\.spec\.ts/)
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}
var modules = requireAll(testContext)

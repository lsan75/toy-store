/// <reference path="./typings/browser.d.ts" />

/**
 *  Javascript libraries
 */
require('zone.js/dist/zone')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/jasmine-patch')
require('zone.js/dist/async-test')

import 'reflect-metadata'

import 'core-js/es6'
import 'core-js/es7/reflect'

import '@angular/common'
import '@angular/compiler'
import '@angular/core'
import '@angular/http'
import '@angular/platform-browser'
import '@angular/platform-browser-dynamic'
import '@angular/router-deprecated'

var testing = require('@angular/core/testing')
var browser = require('@angular/platform-browser-dynamic/testing')
testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

Object.assign(global, testing)

// Redux
import 'redux/dist/redux'
import 'redux-thunk/dist/redux-thunk'
import 'redux-logger/src/index'

// RxJS
import 'rxjs/Rx'

var testContext = require.context('./www', true, /\.spec\.ts/);


 //* get all the files, for each file, call the context function
 //* that will require the file and load it up here. Context will
 //* loop and require those spec files here

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// requires and returns all modules that match
var modules = requireAll(testContext);

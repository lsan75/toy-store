/// <reference path="./typings/browser.d.ts" />

/**
 *  Javascript libraries
 */
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
import 'reflect-metadata'

import 'core-js/es6'
import 'core-js/es7/reflect'

import '@angular/common'
import '@angular/compiler'
import '@angular/core'
import '@angular/http'
import '@angular/platform-browser'
import '@angular/platform-browser-dynamic'
//import '@angular/router'
import '@angular/router-deprecated'


import { setBaseTestProviders } from '@angular/core/testing'
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing'

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS)

// Redux
import 'redux/dist/redux'
import 'redux-thunk/dist/redux-thunk'
import 'redux-logger/src/index'

// RxJS
import 'rxjs/Rx'

/**
 *  Main App
 */
//import './www/js/app'

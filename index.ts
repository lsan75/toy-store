/// <reference path="./typings/browser.d.ts" />

/*
 * styles
 */
import './node_modules/mdi/css/materialdesignicons.min.css'
import './www/less/style.less'

/**
 *  Javascript libraries
 */
import 'core-js/es6'
import 'core-js/es7/reflect'
require('zone.js/dist/zone')

import '@angular/common'
import '@angular/compiler'
import '@angular/core'
import '@angular/http'
import '@angular/platform-browser'
import '@angular/platform-browser-dynamic'
//import '@angular/router'
import '@angular/router-deprecated'

// Redux
import 'redux/dist/redux'
import 'redux-thunk/dist/redux-thunk'
import 'redux-logger/dist/index'

// RxJS
import 'rxjs/Rx'

/**
*  Main App
*/
import './www/js/app'

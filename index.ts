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

import 'angular2/platform/browser'
import 'angular2/platform/common_dom'
import 'angular2/core'
import 'angular2/common'
import 'angular2/http'
import 'angular2/router'

// RxJS
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

/**
*  Main App
*/
import './www/js/app'

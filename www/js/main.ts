// imports libs
import { bootstrap } from '@angular/platform-browser-dynamic/index'
import { provide } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { LocationStrategy, HashLocationStrategy } from '@angular/common/index'

// redux imports
import store from './helpers/redux.helper'

// import the main container
import MainContainer from './containers/main.container'

// bootstrap angular with the main container
bootstrap(MainContainer, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  store(),
  provide(Window, { useValue: window })
])

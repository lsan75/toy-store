// imports libs
import {bootstrap} from '@angular/platform-browser-dynamic/index'
import {provide} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated'
import {LocationStrategy, HashLocationStrategy} from '@angular/common/index'

import I18nService from './services/i18n.service'

// redux imports
import {createStore, applyMiddleware} from 'redux'
import { provider } from 'ng2-redux'
import thunk from 'redux-thunk'
import * as createLogger from 'redux-logger'

// import the main reducer
import rootReducer from './reducers/index'

// import the main container
import MainContainer from './containers/main.container'

// create the redux logger
const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer)

// bootstrap angular with the main container
bootstrap(MainContainer, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  I18nService,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provider(store),
  provide(Window, {useValue: window})
])

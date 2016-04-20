// imports libs
import {bootstrap} from 'angular2/platform/browser'
import {provide} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'

// redux imports
import {createStore, applyMiddleware} from 'redux'
const provider = require('ng2-redux').provider
import thunk from 'redux-thunk'
import * as createLogger from 'redux-logger'

import 'rxjs/Rx'

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
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provider(store)
])

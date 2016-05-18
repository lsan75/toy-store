const provider = require('ng2-redux').provider
const createStore = require('redux').createStore
const applyMiddleware = require('redux').applyMiddleware
const thunk = require('redux-thunk').default
const createLogger = require('redux-logger')

import rootReducer from '../reducers/index'

const createStoreWithMiddleware = process.env.NODE_ENV === 'dev' ?
  applyMiddleware(thunk, createLogger())(createStore) :
  applyMiddleware(thunk)(createStore)

const myStore = createStoreWithMiddleware(rootReducer)

export function store() {
  return provider(myStore)
}

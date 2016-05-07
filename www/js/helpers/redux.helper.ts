import { provider } from 'ng2-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as createLogger from 'redux-logger'
import rootReducer from '../reducers/index'

const createStoreWithMiddleware = process.env.NODE_ENV === 'dev' ?
  applyMiddleware(thunk, createLogger())(createStore) :
  applyMiddleware(thunk)(createStore)

const myStore = createStoreWithMiddleware(rootReducer)

export default function store() {
  return provider(myStore)
}

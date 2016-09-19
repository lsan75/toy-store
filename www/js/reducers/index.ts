import { combineReducers } from 'redux'

import toyReducer from './toy.reducer'
import translateReducer from './translate.reducer'
import userReducer from './user.reducer'

export interface IAppState {
  toyReducer?: any
  translateReducer?: any
  userReducer?: any
}

const rootReducer = combineReducers<IAppState>({
  toyReducer,
  translateReducer,
  userReducer
})

export default rootReducer

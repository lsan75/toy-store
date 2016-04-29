import { combineReducers } from 'redux'

import toyReducer from './toy.reducer'
import translateReducer from './translate.reducer'
import userReducer from './user.reducer'

const rootReducer = combineReducers({
  toyReducer,
  translateReducer,
  userReducer
})

export default rootReducer

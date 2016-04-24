import { combineReducers } from 'redux'

import toyReducer from './toy.reducer'
import userReducer from './user.reducer'

const rootReducer = combineReducers({
  toyReducer,
  userReducer
})

export default rootReducer

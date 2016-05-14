import { USER } from '../actions/user.actions'

function userReducer(state: any = {}, action: any) {

  switch (action.type) {
    case USER.LOAD:
      return action.user || {}

    case USER.UPDATE:
      return state

    default:
      return state
  }

}

export default userReducer

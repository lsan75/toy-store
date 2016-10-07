import { USER } from '../actions/user.actions'

function userReducer(state: any = {}, action: any) {

  switch (action.type) {
    case USER.LOAD:
      return action.user || {}

    case USER.UPDATE:
      return state

    case USER.PAY:
      return Object.assign({}, state, {payed: true})

    default:
      return state
  }

}

export default userReducer

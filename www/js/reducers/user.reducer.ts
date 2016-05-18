import { USER } from '../actions/user.actions'
import { clone } from '../helpers/helpers'

function userReducer(state: any = {}, action: any) {

  const newState = clone(state)

  switch (action.type) {
    case USER.LOAD:
      return action.user || {}

    case USER.UPDATE:
      return state

    case USER.PAY:
      return Object.assign(newState, {payed: true})

    default:
      return state
  }

}

export default userReducer

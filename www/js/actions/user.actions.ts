import {Injectable} from '@angular/core'

export const USER = {
  LOAD: 'USER_LOAD',
  UPDATE: 'USER_UPDATE',
  PAY: 'USER_PAY'
}

@Injectable()
export default class UserActions {
  constructor(private window: Window) {}

  load = () => {
    return dispatch => {
      const user = this.window.localStorage.getItem('toyuser')
      dispatch({
        type: USER.LOAD,
        user: JSON.parse(user)
      })
    }
  }

  update = user => {
    return dispatch => {
      this.window.localStorage.setItem('toyuser', JSON.stringify(user))
      dispatch({
        type: USER.UPDATE
      })
    }
  }

  pay = () => {
    return {
      type: USER.PAY
    }
  }
}

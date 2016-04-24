import {Injectable} from 'angular2/core'

export const USER = {
  LOAD: 'USER_LOAD',
  UPDATE: 'USER_UPDATE'
}

@Injectable()
export default class UserActions {
  constructor(private window: Window) {}

  load = () => {
    return (dispatch, getState) => {
      const user = this.window.localStorage.getItem('toyuser')
      dispatch({
        type: USER.LOAD,
        user: JSON.parse(user)
      })
    }
  }

  update = user => {
    return (dispatch, getState) => {
      this.window.localStorage.setItem('toyuser', JSON.stringify(user))
      dispatch({
        type: USER.UPDATE
      })
    }
  }
}

import { Injectable } from '@angular/core'
import TempService from './temp.service'

export const USER = {
  LOGIN_REQUEST : 'USER_LOGIN_REQUEST',
  LOGIN_RESPONSE : 'LOGIN_RESPONSE',
  LOGOUT: 'USER_LOGOUT'
}

@Injectable()
export default class TempActions {

  constructor(
    private userService: TempService
  ) {}  // service à injecter

  login = credentials => {      // méthode à tester
    return dispatch => {

      dispatch({ type: USER.LOGIN_REQUEST })

      return this.userService.login(credentials).then(user => {  // méthode à "spyer"
         dispatch({
            type: USER.LOGIN_RESPONSE,
            user
         })
      })
    }

  }

  logout = () => {      // méthode à tester
    return {
        type: USER.LOGOUT
    }
  }
}

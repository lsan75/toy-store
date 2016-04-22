import {Injectable} from 'angular2/core'
import ToyService from '../services/toy.service'

export const TOY = {
  REQUEST: 'TOY_REQUEST',
  RESPONSE: 'TOY_RESPONSE',
  SELECT: 'TOY_SELECT'
}

@Injectable()
export default class ToyActions {
  constructor(
    private toyService: ToyService
  ) {}

  getToys = () => {
    return (dispatch, getState) => {

      if (getState().toyReducer.length) {
        return
      }

      dispatch({
        type: TOY.REQUEST
      })

      return this.toyService.getToys().subscribe(res => {
        dispatch({
          type: TOY.RESPONSE,
          toys: res
        })
      })
    }
  }

  select = toy => {
    return {
      type: TOY.SELECT,
      toy
    }
  }
}

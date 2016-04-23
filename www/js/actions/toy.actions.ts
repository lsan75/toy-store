import {Injectable} from 'angular2/core'
import ToyService from '../services/toy.service'

export const TOY = {
  REQUEST: 'TOY_REQUEST',
  RESPONSE: 'TOY_RESPONSE',
  SELECT: 'TOY_SELECT',
  COMPUTE: 'TOY_COMPUTE'
}

@Injectable()
export default class ToyActions {
  constructor(
    private toyService: ToyService
  ) {}

  getToys = () => {
    return (dispatch, getState) => {

      if (getState().toyReducer.toys.length) {
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
    return (dispatch, getState) => {

      dispatch({
        type: TOY.SELECT,
        toy
      })

      dispatch({
        type: TOY.COMPUTE
      })
    }
  }
}

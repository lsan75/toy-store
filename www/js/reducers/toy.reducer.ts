import {TOY} from '../actions/toy.actions'

function toyReducer(state: any[] = [], action: any) {

  switch (action.type) {
    case TOY.REQUEST:
      return state

    case TOY.RESPONSE:
      return action.toys

    case TOY.SELECT:
      const newState = JSON.parse(JSON.stringify(state))
      return newState.map(item => {
        if (item.title === action.toy.title) {
          item.selected = !!!item.selected
        }
        return item
      })

    default:
      return state
  }

}

export default toyReducer

import {TOY} from '../actions/toy.actions'

function toyReducer(state: any = {toys: [], price: 0}, action: any) {

  switch (action.type) {
    case TOY.REQUEST:
      return state

    case TOY.RESPONSE:
      return { toys: action.toys }

    case TOY.SELECT:
      const newToys = JSON.parse(JSON.stringify(state.toys))
      return Object.assign({}, state, { toys: newToys.map(item => {
        if (item.title === action.toy.title) {
          item.selected = !!!item.selected
        }
        return item
      })})

    case TOY.COMPUTE:
      return Object.assign({}, state, { price: state.toys.reduce((price, curr) => {
        return curr.selected ? price += curr.price : price
      }, 0)})

    default:
      return state
  }

}

export default toyReducer

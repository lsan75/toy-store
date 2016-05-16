import { TOY } from '../actions/toy.actions'
import { clone } from '../helpers/helpers'

const initToy = {
  toys: [],
  price: 0,
  counter: 0
}

function toyReducer(state = initToy, action) {
  const newState = clone(state)

  switch (action.type) {
    case TOY.REQUEST:
      return state

    case TOY.RESPONSE:
      return Object.assign(newState, { toys: action.toys })

    case TOY.SELECT:
      const toys = newState.toys.map(item => {
        if (item.title === action.toy.title) {
          item.selected = !!!item.selected
        }
        return item
      })
      const counter = toys.filter(item => {
        return item.selected
      }).length

      return Object.assign(newState, { toys }, { counter })

    case TOY.COMPUTE:
      const price = newState.toys.reduce((price, curr) => {
        return curr.selected ? price += curr.price : price
      }, 0)

      return Object.assign(newState, { price })

    default:
      return state
  }

}

export default toyReducer

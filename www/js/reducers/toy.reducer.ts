import { TOY } from '../actions/toy.actions'

const initToy = {
  toys: [],
  price: 0,
  counter: 0
}

function toyReducer(state = initToy, action) {

  switch (action.type) {
    case TOY.REQUEST:
      return state

    case TOY.RESPONSE:
      return Object.assign({}, state, { toys: action.toys })

    case TOY.SELECT:
      const toys = state.toys.map(item => {
        if (item.title === action.toy.title) {
          const newItem = Object.assign({}, item)
          newItem.selected = !!!newItem.selected
          return newItem
        }
        return item
      })
      const counter = toys.filter(item => {
        return item.selected
      }).length

      return Object.assign({}, state, { toys }, { counter })

    case TOY.COMPUTE:
      const price = state.toys.reduce((price, curr) => {
        return curr.selected ? price += curr.price : price
      }, 0)

      return Object.assign({}, state, { price })

    default:
      return state
  }

}

export default toyReducer

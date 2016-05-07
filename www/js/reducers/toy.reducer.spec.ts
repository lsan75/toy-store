import toyReducer from './toy.reducer'
import { TOY } from '../actions/toy.actions'

describe('toyReducer', () => {

  it('Should Request', () => {
    const result = toyReducer({default: true}, {
      type: TOY.REQUEST
    })
    expect(result).toEqual({default: true})
  })

  it('Should respond', () => {
    const result = toyReducer({}, {
      type: TOY.RESPONSE,
      toys: ['toys']
    })
    expect(result).toEqual({
      toys: ['toys']
    })
  })

  it('Should select', () => {
    const result = toyReducer({
      toys: [{title: 'mytoy'}, {title: 'toto'}],
      price: 10
    },
    {
      type: TOY.SELECT,
      toy: {title: 'mytoy'}
    })

    expect(result.price).toBe(10)
    expect(result.toys.length).toBe(2)
    const selected = result.toys.filter(item => item.selected)
    expect(selected[0].title).toBe('mytoy')
  })

  it('Shoud compute', () => {

  })
})

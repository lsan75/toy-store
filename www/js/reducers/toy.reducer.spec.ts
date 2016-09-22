/// <reference path="../../../typings/index.d.ts" />

import toyReducer from './toy.reducer'
import { TOY } from '../actions/toy.actions'

describe('toyReducer', () => {

  const data = {
    toys: [{selected: true}],
    price: 10,
    counter: 20
  }

  it('Should Request', () => {
    const result = toyReducer(data, {
      type: TOY.REQUEST
    })
    expect(result).toEqual(data)
  })

  it('Should respond', () => {
    const result = toyReducer(data, {
      type: TOY.RESPONSE,
      toys: ['toys']
    })
    expect(result.toys).toEqual(['toys'])
  })

  it('Should select', () => {
    const result = toyReducer({
      toys: [{title: 'mytoy'}, {title: 'toto'}],
      price: 10,
      counter: 0
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
    const result = toyReducer(
    {
      toys: [
        { price: 10, selected: true },
        { price: 20 },
        { price: 30, selected: true }
      ],
      counter: 0,
      price: 0
    },
    {
      type: TOY.COMPUTE
    })
    expect(result.toys.length).toBe(3)
    expect(result.price).toBe(40)
  })
})

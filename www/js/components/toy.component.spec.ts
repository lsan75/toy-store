import {beforeEachProviders, beforeEach, inject} from '@angular/core/testing'
import ToyComponent from './toy.component'

describe('ToyComponent', () => {
  let toy

  beforeEachProviders(() => [
    ToyComponent
  ])

  beforeEach(inject([ToyComponent], t => {
    toy = t
  }))

  it('Should be defined', () => {
    expect(toy).toBeDefined()
  })

  it('Toy should send a request', () => {
    toy.selectRequest.subscribe(res => {
      expect(res).toBe('bou')
    })
    toy.select('bou')
  })

})

import { beforeEachProviders, inject } from '@angular/core/testing'
import UpperPipe from '../pipes/upper.pipe'

describe('UpperPipe', () => {

  let pipe

  beforeEachProviders(() => [
    UpperPipe
  ])

  beforeEach(inject([UpperPipe], p => {
    pipe = p
  }))

  it('Should return an uppercase', () => {
    expect(pipe.transform('')).toEqual('')
    expect(pipe.transform('hello')).toEqual('HELLO')
  })
})

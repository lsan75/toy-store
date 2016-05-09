import { beforeEachProviders, describe, beforeEach, inject, it, expect } from '@angular/core/testing'
import UpperPipe from '../pipes/upper.pipe'

describe('UpperPipe', () => {

  let pipe

  beforeEachProviders(() => [
    UpperPipe
  ])

  beforeEach(inject([UpperPipe], p => {
    pipe = new UpperPipe()
  }))

  it('Should return an uppercase', () => {
    expect(pipe.transform('')).toEqual('')
    expect(pipe.transform('hello')).toEqual('HELLO')
  })
})
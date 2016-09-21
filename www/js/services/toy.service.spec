import { inject } from '@angular/core/testing'
import { MockBackend } from '@angular/http/testing'
import { XHRBackend, Response, ResponseOptions, Headers } from '@angular/http'

import ToyService from '../services/toy.service'

describe('Toy Service', () => {

  let toy
  let mock

  beforeEach(inject([XHRBackend, ToyService], (m, t) => {
    toy = t
    mock = m
  }))

  it('Should be defined', () => {
    expect(toy).toBeDefined()
  })

  it('Should get some toys', () => {

    let response = [{
      jouet: 'toto'
    }]

    mock.connections.subscribe(connection => {
      const resp = new ResponseOptions({
        body: JSON.stringify(response),
        status: 200
      })
      connection.mockRespond(new Response(resp))
    })

    toy.getToys().subscribe(toys => {
      expect(toys.length).toBe(1)
    })
  })

  it('Should return an error', () => {
    mock.connections.subscribe(connection => {
      const options = new ResponseOptions({
        body: 'erreur 404',
        status: 404
      })
      connection.mockRespond(new Response(options))
    })
    expect(() => toy.getToys().subscribe()).toThrow('Server Error')
  })
})


import {beforeEachProviders, beforeEach, afterEach, inject} from '@angular/core/testing'
import {MockBackend} from '@angular/http/testing'
import {provide} from '@angular/core'
import {HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions, Headers} from '@angular/http'

import ToyService from '../services/toy.service'

describe('Toy Service', () => {

  let toy
  let mock

  beforeEachProviders(() => [
    ToyService,
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: MockBackend})
  ])

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

})


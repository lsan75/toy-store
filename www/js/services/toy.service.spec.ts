/*
 * Testing a Service with MockBackend
 * More info: https://angular.io/docs/ts/latest/api/http/testing/index/MockBackend-class.html
 */

import { TestBed, fakeAsync, inject } from '@angular/core/testing'
import { HttpModule, XHRBackend, ResponseOptions, Response, RequestMethod } from '@angular/http'
import { MockBackend, MockConnection } from '@angular/http/testing/mock_backend'

import ToyService from './toy.service'

describe('ToyService', () => {

    const data = [
      {
        toy: 'toto'
      }
    ]

    beforeEach(() => {
      TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: XHRBackend,
                    useClass: MockBackend
                },
                ToyService
            ]
        })
    })

    it('should get toys', fakeAsync(inject(
        [ XHRBackend, ToyService ],
        ( mockBackend: XHRBackend, s: ToyService ) => {
            const url = './mocks/toys.json'

            mockBackend.connections.subscribe((connection: MockConnection) => {
              expect(connection.request.url).toBe(url)
              connection.mockRespond(new Response(
                new ResponseOptions({ body: data })
              ))
            })
            s.getToys().subscribe(res => {
              expect(res).toEqual(data)
            })  
        })
    ))
})

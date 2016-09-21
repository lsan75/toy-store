import { inject, async } from '@angular/core/testing'

import ToyComponent from './toy.component'

describe('ToyComponent', () => {
  let toy

  beforeEach(async(inject([ToyComponent], (_toy) => {
    toy = _toy
  })))

  it('Should be defined', () => {
    expect(toy).toBeDefined()
  })

  it('Toy should send a request', () => {
    toy.select('bou')
    toy.selectRequest.subscribe(res => {
      expect(res).toBe('bou')
    })
  })

  it('Should change state', done => {

/*    tcb.createAsync(ToyComponent).then(fixture => {

      const instance = fixture.componentInstance
      const element = fixture.nativeElement

      instance.toy = {selected: true, icon: 'toto'}
      fixture.detectChanges()
      expect(element.querySelector('article').className).toBe('toy selected')
      expect(element.querySelector('i').className).toBe('mdi mdi-toto')

      done()
    })
*/
  })

})

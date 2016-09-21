import { inject, async } from '@angular/core/testing'

import ToyContainer from './toy.container'
import ToyActions from '../actions/toy.actions'

// build redux
import { NgRedux } from 'ng2-redux'

describe('ToyContainer', () => {

  let redux
  let actions
  let toy

  class MockToyActions {
    getToys = () => (dispatch, getState) => {}
    selectToy = () => (dispatch, getState) => {}
  }

  beforeEach(async(inject([NgRedux, ToyContainer, ToyActions], (_r, _c, _a) => {
    redux = _r
    actions = _a
    toy = _c
    spyOn(redux, 'dispatch')
    spyOn(actions, 'getToys')
    spyOn(actions, 'selectToy')
  })))

  it('Should be initialize', done => {

/*    tcb.createAsync(ToyContainer).then(fixture => {

      const instance = fixture.componentInstance
      const element = fixture.nativeElement

      fixture.detectChanges()

      expect( redux.dispatch ).toHaveBeenCalled()
      expect( actions.getToys ).toHaveBeenCalled()

      done()

    }).catch(e => done.fail(e))
*/
  })

  it('Should be selected', done => {

/*    tcb.createAsync(ToyContainer).then(fixture => {

      const instance = fixture.componentInstance
      const element = fixture.nativeElement

      instance.onSelect('toto')
      expect( redux.dispatch ).toHaveBeenCalled()
      expect( actions.selectToy ).toHaveBeenCalledWith('toto')

      done()

    }).catch(e => done.fail(e))
*/
  })
})

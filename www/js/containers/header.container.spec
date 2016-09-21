import { inject, async } from '@angular/core/testing'

import HeaderContainer from './header.container'
import TranslateActions from '../actions/translate.actions'
import { TOY } from '../actions/toy.actions'
import { TRANSLATE } from '../actions/translate.actions'

// build redux
import { NgRedux } from 'ng2-redux'

class TranslateMock {
  setLang = () => {}
}

describe('HeaderContainer', () => {

  let redux
  let header
  let translate

  beforeEach(async(inject([TranslateActions, HeaderContainer, NgRedux], (t, tr, h, r) => {
    redux = r
    header = h
    translate = tr
    spyOn(translate, 'setLang')
  })))

  it('Should change state', done => {

/*    return tcb
      .overrideTemplate(HeaderContainer, '<div>{{counter}}</div>')
      .createAsync(HeaderContainer).then(fixture => {

      const instance = fixture.componentInstance

      redux.dispatch({
        type: TOY.COMPUTE
      })
      fixture.detectChanges()
      expect(instance.counter).toBe(0)

      redux.dispatch({
        type: TRANSLATE.SETLANG,
        translate: 'bam'
      })

      fixture.detectChanges()
      expect(instance.translate).toBe('bam')

      done()

    }).catch(e => done.fail(e))
*/
  })

})

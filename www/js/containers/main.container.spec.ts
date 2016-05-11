import { beforeEachProviders, inject, it, async } from '@angular/core/testing'
import { TestComponentBuilder } from '@angular/compiler/testing'
import { provide } from '@angular/core'

// redux
import { NgRedux } from 'ng2-redux'
import store from '../helpers/redux.helper'

import MainContainer from './main.container'
import TranslateActions from '../actions/translate.actions'
import HeaderContainer from '../containers/header.container'
import ToyActions from '../actions/toy.actions'
import ToyService from '../services/toy.service'
import I18nService from '../services/i18n.service'

class Mock {}
class MockTranslate {
  setLang = parm => (dispatch, getState) => {}
}

describe('MainContainer', () => {

  let tcb, redux, translate

  beforeEachProviders(() => [
    TestComponentBuilder,
    MainContainer,
    provide(TranslateActions, { useClass: MockTranslate }),
    provide(HeaderContainer, { useClass: Mock }),
    provide(I18nService, { useClass: Mock }),
    provide(ToyService, { useClass: Mock }),
    provide(ToyActions, { useClass: Mock }),
    store()
  ])

  beforeEach(async(inject([TestComponentBuilder, NgRedux, TranslateActions], (_tcb, _redux, _translate) => {
    tcb = _tcb
    redux = _redux
    translate = _translate

    spyOn(redux, 'dispatch')
    spyOn(translate, 'setLang')

  })))

  it('Should set translate', done => {

    tcb
      .overrideTemplate(MainContainer, '')
      .createAsync(MainContainer).then(fixture => {

        fixture.detectChanges()
        expect(redux.dispatch).toHaveBeenCalled()
        //expect(translate.setLang).toHaveBeenCalled()

        done()

      }).catch(e => done.fail(e))

  })

})

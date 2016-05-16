import { beforeEachProviders, inject, it, async } from '@angular/core/testing'
import { TestComponentBuilder } from '@angular/compiler/testing'
import { provide, Injectable, Directive } from '@angular/core'
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http'
import { MockBackend } from '@angular/http/testing'

// redux
import { NgRedux } from 'ng2-redux'
import { store } from '../helpers/redux.helper'

import MainContainer from './main.container'
import TranslateActions from '../actions/translate.actions'
import ToyActions from '../actions/toy.actions'
import ToyService from '../services/toy.service'
import I18nService from '../services/i18n.service'

import HeaderContainer from '../containers/header.container'
import BasketContainer from '../containers/basket.container'
import ToyContainer from '../containers/toy.container'
import CheckoutContainer from '../containers/checkout.container'

@Directive()
class MockHeader {}

@Injectable()
class Mock {}

@Injectable()
class MockTranslate {
  setLang = () => {}
}

describe('MainContainer', () => {

  let tcb, redux, translate

  beforeEachProviders(() => [
    TestComponentBuilder,
    MainContainer,

    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: MockBackend}),

    provide(HeaderContainer, { useClass: MockHeader }),
    provide(BasketContainer, { useClass: MockHeader }),
    provide(CheckoutContainer, { useClass: MockHeader }),
    provide(ToyContainer, { useClass: MockHeader }),

    provide(TranslateActions, { useClass: MockTranslate }),
    provide(I18nService, { useClass: Mock }),
    provide(ToyService, { useClass: Mock }),
    provide(ToyActions, { useClass: Mock }),
    store()
  ])

  beforeEach(async(inject([TestComponentBuilder, NgRedux], (_tcb, _redux) => {
    tcb = _tcb
    redux = _redux

    spyOn(redux, 'dispatch')

  })))

  it('Should set translate', done => {

    tcb
      .overrideTemplate(MainContainer, '<div></div>')
      .createAsync(MainContainer).then(fixture => {

        fixture.detectChanges()
        expect(redux.dispatch).toHaveBeenCalled()
        done()

      }).catch(e => done.fail(e))

  })

})

import { beforeEachProviders, inject } from '@angular/core/testing'
import { TestComponentBuilder } from '@angular/compiler/testing'

import { provide } from '@angular/core'
import { RouteRegistry, ROUTER_PRIMARY_COMPONENT, RootRouter, Router } from '@angular/router-deprecated'
import { SpyLocation } from '@angular/common/testing'
import { Location } from '@angular/common/index'

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

describe('MainContainer', () => {

  let tcb, main, redux, translate, router, location

  beforeEachProviders(() => [
    MainContainer,
    RouteRegistry,
    provide(Router, {useClass: RootRouter}),
    provide(Location, {useClass: SpyLocation}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: MainContainer}),
    TranslateActions,
    provide(HeaderContainer, { useClass: Mock }),
    provide(I18nService, { useClass: Mock }),
    provide(ToyService, { useClass: Mock }),
    provide(ToyActions, { useClass: Mock }),
    TestComponentBuilder,
    store()
  ])

  beforeEach(async(inject([TestComponentBuilder, NgRedux, TranslateActions, Router, Location], (_tcb, _redux, _translate, _router, _location) => {
    tcb = _tcb
    redux = _redux
    translate = _translate
    router = _router
    location = _location

    spyOn(redux, 'dispatch')

  })))

  it('Should route to /toys', done => {
    router.navigate(['Toys']).then(() => {
      expect(location.path()).toBe('/toys')
      done()
    }).catch(e => done.fail(e))
  })

  it('Should set translate', done => {

    tcb
      .overrideTemplate(MainContainer, '')
      .createAsync(MainContainer).then(fixture => {

        fixture.detectChanges()

        expect(redux.dispatch).toHaveBeenCalled()

        done()
      }).catch(e => done.fail(e))

  })

})

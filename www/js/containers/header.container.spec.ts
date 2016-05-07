import { beforeEachProviders, beforeEach, inject, async } from '@angular/core/testing'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { TestComponentBuilder } from '@angular/compiler/testing'

import HeaderContainer from './header.container'
import { TOY } from '../actions/toy.actions'

// build redux
import { NgRedux } from 'ng2-redux'
import store from '../helpers/redux.helper'

describe('HeaderContainer', () => {

  let redux
  let tcb
  let header
  let translate

  beforeEachProviders(() => [
    ROUTER_PROVIDERS,
    TestComponentBuilder,
    HeaderContainer,
    store()
  ])

  beforeEach(async(inject([TestComponentBuilder, HeaderContainer, NgRedux], (t, h, r) => {
    redux = r
    tcb = t
    header = h
  })))

  it('Should change state', done => {

    return tcb
      .overrideTemplate(HeaderContainer, '<div>{{translate}} {{counter}}</div>')
      .createAsync(HeaderContainer).then(fixture => {

      const instance = fixture.componentInstance

      redux.dispatch({
        type: TOY.RESPONSE,
        toys: [
          { selected: true },
          { selected: true }
        ]
      })

      fixture.detectChanges()
      expect(instance.counter).toBe(2)

      done()

    }).catch(e => done.fail(e))

  })

})

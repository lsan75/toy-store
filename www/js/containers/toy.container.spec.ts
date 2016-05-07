import { beforeEachProviders, beforeEach, inject, async } from '@angular/core/testing'
import { TestComponentBuilder } from '@angular/compiler/testing'
import { HTTP_PROVIDERS } from '@angular/http'

import ToyContainer from './toy.container'
import ToyActions from '../actions/toy.actions'
import ToyService from '../services/toy.service'

// build redux
import { provider, NgRedux } from 'ng2-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)

describe('ToyContainer', () => {

  let redux
  let tcb
  let actions
  let toy

  beforeEachProviders(() => [
    TestComponentBuilder,
    HTTP_PROVIDERS,
    ToyContainer,
    ToyActions,
    ToyService,
    provider(store)
  ])

  beforeEach(async(inject([TestComponentBuilder, NgRedux, ToyContainer, ToyActions], (_t, _r, _c, _a) => {
    tcb = _t
    redux = _r
    actions = _a
    toy = _c
  })))

  it('Should be instanciated', done => {

    tcb.createAsync(ToyContainer).then(fixture => {

      const instance = fixture.componentInstance
      const element = fixture.nativeElement

      expect(instance).toBeDefined()

      done()
    }).catch(e => done.fail(e))

  })
})

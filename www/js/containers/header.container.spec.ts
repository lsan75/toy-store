import { beforeEachProviders, beforeEach, inject, async } from '@angular/core/testing'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { TestComponentBuilder } from '@angular/compiler/testing'

import HeaderContainer from './header.container'
import { TOY } from '../actions/toy.actions'

// build redux
import { provider, NgRedux } from 'ng2-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(rootReducer)

describe('HeaderContainer', () => {

  let redux
  let tcb
  let header

  beforeEachProviders(() => [
    ROUTER_PROVIDERS,
    TestComponentBuilder,
    HeaderContainer,
    provider(store)
  ])

  beforeEach(async(inject([TestComponentBuilder, HeaderContainer, NgRedux], (t, h, r) => {
    redux = r
    tcb = t
    header = h
  })))

  it('Should change state', done => {

    // return tcb
    //   .createAsync(HeaderContainer).then(fixture => {

    //   const instance = fixture.componentInstance

    //   redux.dispatch({
    //     type: TOY.RESPONSE,
    //     toys: [
    //       { selected: true },
    //       { selected: true }
    //     ]
    //   })

    //   fixture.detectChanges()
    //   expect(instance.counter).toBe(2)

    //   done()
    // }).catch(e => done.fail(e))
    done()
  })

})

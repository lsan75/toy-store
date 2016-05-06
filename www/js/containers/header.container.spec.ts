import { beforeEachProviders, beforeEach, inject } from '@angular/core/testing'
import { TestComponentBuilder } from '@angular/compiler/testing'

import HeaderContainer from './header.container'

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

  beforeEachProviders(() => [
    TestComponentBuilder,
    HeaderContainer,
    provider(store)
  ])

  beforeEach(inject([TestComponentBuilder, NgRedux], (t, r) => {
    tcb = t
    redux = r
  }))

  it('Should change state', () => {

    return tcb.createAsync(HeaderContainer).then(fixture => {
      fixture.detectChanges()

      redux.dispatch({
        type: 'TOY.TOY_RESPONSE',
        toys: [
          { selected: true },
          { selected: true }
        ]
      })

      expect(header.counter).toBe(2)

    }

  }))

})

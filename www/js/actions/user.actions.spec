import { inject } from '@angular/core/testing'

import UserActions, {USER} from '../actions/user.actions'

describe('User Actions', () => {

  let user
  let redux

  beforeEach(inject([UserActions], u => {
    user = u
    redux = {
      dispatch: () => {}
    }
    spyOn(redux, 'dispatch')
    window.localStorage.setItem('toyuser', '{"valeur":"true"}')
  }))

  afterEach(() => {
    window.localStorage.removeItem('toyuser')
  })

  it('Should be defined', () => {
    expect(user).toBeDefined()
  })

  it('Should load a user', () => {
    const res = user.load()
    const result = res(redux.dispatch)

    expect(redux.dispatch).toHaveBeenCalledWith({
      type: USER.LOAD,
      user: {
        valeur: 'true'
      }
    })
  })

  it('Should update a user', () => {
    const res = user.update({
      user: 'toto'
    })
    const result = res(redux.dispatch)

    expect(redux.dispatch).toHaveBeenCalledWith({
      type: USER.UPDATE
    })

    const item = window.localStorage.getItem('toyuser')
    expect(item).toBe('{"user":"toto"}')
  })

})

import { beforeEachProviders, beforeEach, inject } from '@angular/core/testing'
import { HTTP_PROVIDERS } from '@angular/http'
import TempActions, { USER } from './temp.actions'
import TempService from './temp.service'

const mockService = () => {
    return Promise.resolve({name: 'superman'})
}

describe('TEMP ACTIONS', () => {

    let userActions, userService
    let redux = {
        dispatch: () => {}
    }

    beforeEachProviders(() => [
        HTTP_PROVIDERS,
        TempActions,
        TempService
    ])

    beforeEach(inject([ TempActions, TempService ], (_a, _s) => {
        userActions = _a
        userService = _s
        spyOn(userService, 'login').and.callFake(mockService)
        spyOn(redux, 'dispatch')
   }))

    it('Should logout', () => {
        const result = userActions.logout()
        expect(result).toEqual({
            type: USER.LOGOUT
        })
    })

    it('Should login', done => {
        const middle = userActions.login('toto')(redux.dispatch)
        .then(() => {

            expect(redux.dispatch).toHaveBeenCalledWith({ type: USER.LOGIN_REQUEST })
            expect(userService.login).toHaveBeenCalledWith('toto')
            expect(redux.dispatch).toHaveBeenCalledWith({
                type: USER.LOGIN_RESPONSE,
                user: {name: 'superman'}
            })

            done()
        })


    })

})

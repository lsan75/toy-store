import { inject } from '@angular/core/testing'
import { Observable } from 'rxjs/Rx'

import I18nService from '../services/i18n.service'
import { TRANSLATE } from '../actions/translate.actions'
import TranslateActions from '../actions/translate.actions'

class I18nMock {
  getLangs = () => {}
  setLang = () => {}
}

function observe() {
  return new Observable(obs => obs.next('done'))
}

describe('Translate Actions', () => {

  let trans, i18n, redux

  beforeEach(inject([TranslateActions, I18nService], (t, i) => {
    trans = t
    i18n = i
    redux = {
      dispatch: () => {}
    }
    spyOn(redux, 'dispatch')
    spyOn(i18n, 'getLangs').and.returnValue('langues')
    spyOn(i18n, 'setLang').and.callFake(observe)
  }))

  it('Should get langs', () => {
    const res = trans.setLang('fr')
    const result = res(redux.dispatch)

    expect(redux.dispatch).toHaveBeenCalledWith({
      type: TRANSLATE.GETLANGS,
      langs: 'langues'
    })

    expect(i18n.setLang).toHaveBeenCalledWith('fr')
    expect(redux.dispatch).toHaveBeenCalledWith({
      type: TRANSLATE.SETLANG,
      translate: 'done',
      lang: 'fr'
    })

  })

})

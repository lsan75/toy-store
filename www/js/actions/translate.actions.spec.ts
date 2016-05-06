import {beforeEachProviders, beforeEach, inject} from '@angular/core/testing'

import I18nService from '../services/i18n.service'
import TranslateActions from '../actions/translate.actions'

describe('Translate Actions', () => {

  let trans, i18n

  beforeEachProviders(() => [
    I18nService,
    TranslateActions
  ])

  beforeEach(inject([TranslateActions, I18nService], (t, i) => {
    trans = t
    i18n = i

    spyOn(i18n, 'setLang').and.returnValue('scandal')
  }))

  it('Should call i18n and return an action', () => {
    const res = trans.setLang('fr')
    expect(i18n.setLang).toHaveBeenCalledWith('fr')
    expect(res).toEqual({ type: 'TRANSLATE_SETLANG', translate: 'scandal' })
  })

})

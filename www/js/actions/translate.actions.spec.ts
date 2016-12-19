import { } from 'jasmine'
import { TestBed, inject } from '@angular/core/testing'
import { Observable } from 'rxjs/Rx'
import I18nService from '../services/i18n.service'
import TranslateActions, { TRANSLATE } from '../actions/translate.actions'

const i18nMock = () => {
  return new Observable(obs => obs.next({
    translate: 'hello'
  }))
}
const myRedux = {
  dispatch: () => {}
}

describe('Translate Actions', () => {

  let i18n

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        TranslateActions, I18nService
      ]
    })

    i18n = TestBed.get(I18nService)

    spyOn(i18n, 'getLangs').and.returnValue('hop')
    spyOn(i18n, 'setLang').and.returnValue(i18nMock)
    spyOn(myRedux, 'dispatch')
  })

  it('Should set langs', inject([TranslateActions], (trans: TranslateActions) => {

    const res = trans.setLang('toto')(myRedux.dispatch)

    expect(myRedux.dispatch).toHaveBeenCalledWith({
      type: TRANSLATE.GETLANGS,
      langs: 'hop'
    })

    expect(myRedux.dispatch).toHaveBeenCalledWith({
      type: TRANSLATE.SETLANG,
      translate: 'hello',
      lang: 'toto'
    })

  }))

})

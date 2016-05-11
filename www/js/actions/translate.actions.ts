import {Injectable} from '@angular/core'
import I18nService from '../services/i18n.service'

export const TRANSLATE = {
  SETLANG: 'TRANSLATE_SETLANG',
  GETLANGS: 'TRANSLATE_GETLANGS',
  SELECTLANG: 'TRANSLATE_SELECTLANG'
}

@Injectable()
export default class TranslateActions {
  constructor(
    private i18nService: I18nService
  ) {}

  setLang = lang => {
    return dispatch => {

      dispatch({
        type: TRANSLATE.GETLANGS,
        langs: this.i18nService.getLangs()
      })

      dispatch({
        type: TRANSLATE.SETLANG,
        translate: this.i18nService.setLang(lang)
      })

      return dispatch({
        type: TRANSLATE.SELECTLANG,
        lang
      })
    }
  }

}

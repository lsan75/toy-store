import {Injectable} from '@angular/core'
import I18nService from '../services/i18n.service'

export const TRANSLATE = {
  SETLANG: 'TRANSLATE_SETLANG',
  GETLANGS: 'TRANSLATE_GETLANGS'
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

      return this.i18nService.setLang(lang).subscribe(translate => {
        dispatch({
          type: TRANSLATE.SETLANG,
          translate,
          lang
        })
      })

    }
  }

}

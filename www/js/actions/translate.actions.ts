import {Injectable} from '@angular/core'
import I18nService from '../services/i18n.service'

export const TRANSLATE = {
  SETLANG: 'TRANSLATE_SETLANG'
}

@Injectable()
export default class TranslateActions {
  constructor(
    private i18nService: I18nService
  ) {}

  setLang = lang => {
    return {
      type: TRANSLATE.SETLANG,
      translate: this.i18nService.setLang(lang)
    }
  }
}

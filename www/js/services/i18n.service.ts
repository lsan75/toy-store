import {Injectable} from '@angular/core'

@Injectable()
export default class I18nService {
  private langs = {
    en: {
      title: 'toy store'
    },
    fr: {
      title: 'magasin de jouets'
    }
  }

  setLang(lang) {
    return this.langs[lang || 'en']
  }
}

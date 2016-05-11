import {Injectable} from '@angular/core'

@Injectable()
export default class I18nService {

  private langs = {
    en: {
      title: 'toy store',
      checkout: 'go buy it',
      payit: 'get my money',
      firstname: 'first name',
      lastname: 'last name',
      cb: 'credit card number',
      paymsg: 'You have to pay',
      bravo: 'Thanks for your purchase !'
    },
    fr: {
      title: 'magasin de jouets',
      checkout: 'j\'achète',
      payit: 'prends mon argent',
      firstname: 'prénom',
      lastname: 'nom',
      cb: 'carte de crédit',
      paymsg: 'vous devez payer',
      bravo: 'merci, revenez nous voir très vite !'
    }
  }

  getLangs() {
    return [{label: 'en'}, {label: 'fr'}]
  }

  setLang(lang) {
    return this.langs[lang || 'en']
  }
}

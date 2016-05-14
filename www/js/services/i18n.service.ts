import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export default class I18nService {

  constructor(private http: Http) {}

  getLangs = () => {
    return [{label: 'en'}, {label: 'fr'}]
  }

  setLang = lang => {

    return this.http.get(`./mocks/translation-${lang}.json`)
      .map((res: Response) => {
        return res.json()
      })
      .catch(error => Observable.throw(error._body || 'Server Error'))

  }
}

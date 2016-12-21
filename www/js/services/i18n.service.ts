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

    return this.http.get(`http://localhost:3000/translate`)
      .map((res: Response) => {
        return res.json()[lang]
      })
      .catch(error => Observable.throw(error._body || 'Server Error'))

  }
}

import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export default class ToyService {
  constructor(
    public http: Http
  ) {}

  getToys = () => {

    return this.http.get('./mocks/toys.json')
      .map((res: Response) => {
        return res.json()
      })
      .catch(error => Observable.throw(error._body || 'Server Error'))
  }
}

import {Injectable} from 'angular2/core'
import {Http, Response, Request, RequestMethod} from 'angular2/http'
import {Observable} from 'rxjs/Rx'

@Injectable()
export default class ToyService {
  constructor(
    public http: Http
  ) {}

  getToys = () => {

    return this.http.get('./mocks/toys.json')
      .map((res: Response) => {
        console.log(res.status)
        return res.json()
      })
      .catch(error => Observable.throw(error._body || 'Server Error'))
  }
}

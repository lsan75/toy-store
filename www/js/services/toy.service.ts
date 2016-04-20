import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'

@Injectable()
export default class ToyService {
  constructor(public http: Http) {}

  getToys = () => {
    return this.http.get('./mocks/toys.json')
      .map((res: Response) => res.json())
  }
}

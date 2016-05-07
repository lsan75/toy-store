import { Injectable } from '@angular/core'

@Injectable()
export default class TempService {
  login = cred => { return Promise.resolve({name: 'toto'}) }
}

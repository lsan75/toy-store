import {Component, OnInit} from 'angular2/core'

import ToyComponent from '../components/toy.component'
import ToyService from '../services/toy.service'

@Component({
  selector: 'toy-container',
  templateUrl: './js/containers/toy.container.html',
  directives: [ToyComponent],
  providers: [ToyService]
})
export default class ToyContainer implements OnInit {

  public toys

  constructor(public toyService: ToyService) {}

  ngOnInit() {
    this.toyService.getToys().subscribe(res => {
      this.toys = res
    })
  }
}

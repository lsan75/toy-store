import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { NgRedux, select } from 'ng2-redux'

import ToyActions from '../actions/toy.actions'

interface IToys {
  icon: string
  price: number
  title: string
  selected?: boolean
}

@Component({
  selector: 'toy-container',
  templateUrl: './toy.container.html'
})

export default class ToyContainer implements OnInit {

  constructor(
    private ngRedux: NgRedux<any>,
    private toyActions: ToyActions
  ) {}

  @select(state => state.toyReducer.toys) toys: Observable<IToys[]>

  ngOnInit() {
    this.ngRedux.dispatch( <any>this.toyActions.getToys() )
  }

  onSelect(obj) {
    this.ngRedux.dispatch( <any>this.toyActions.selectToy(obj) )
  }

}

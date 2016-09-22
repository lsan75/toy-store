import { Component, OnInit } from '@angular/core'
import { Router }  from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { NgRedux, select } from 'ng2-redux'

import ToyActions from '../actions/toy.actions'

@Component({
  selector: 'basket-component',
  templateUrl: './basket.container.html'
})
export default class BasketContainer implements OnInit {
  public translate
  constructor(
    private ngRedux: NgRedux<any>,
    private toyActions: ToyActions,
    private router: Router
  ) {}

  @select(state => state.toyReducer.toys.filter(item => item.selected)) toys: Observable<any>
  @select(state => state.toyReducer.price) price: Observable<number>
  @select(state => state.translateReducer.translate) translateMap: Observable<any>

  ngOnInit() {
    this.translateMap.subscribe(res => {
      this.translate = res
    })
  }

  delete(obj) {
    this.ngRedux.dispatch(<any>this.toyActions.selectToy(obj))
  }

  checkout() {
    this.router.navigate(['/checkout'])
  }

}

import { Component, OnDestroy } from '@angular/core'
import { Router } from '@angular/router-deprecated'
import { NgRedux } from 'ng2-redux'

import UpperPipe from '../pipes/upper.pipe'
import ToyActions from '../actions/toy.actions'

@Component({
  selector: 'basket-component',
  template: require('./basket.container.html'),
  pipes: [UpperPipe]
})
export default class BasketContainer implements OnDestroy {
  public toys
  public price
  private unsub

  constructor(
    private ngRedux: NgRedux<any>,
    private toyActions: ToyActions,
    private router: Router
  ) {
    this.unsub = ngRedux.connect(this.mapStateToThis)(this)
  }

  ngOnDestroy() {
    this.unsub()
  }

  delete(obj) {
    this.ngRedux.dispatch(this.toyActions.selectToy(obj))
  }

  checkout() {
    this.router.navigate(['Checkout'])
  }

  private mapStateToThis(state) {
    return {
      toys: state.toyReducer.toys.filter(item => {
        return item.selected
      }),
      price: state.toyReducer.price,
      translate: state.translateReducer.translate
    };
  }
}

import {Component, Inject, OnDestroy} from '@angular/core'
import {Router} from '@angular/router-deprecated'
import { NgRedux } from 'ng2-redux'

import ToyActions from '../actions/toy.actions'

@Component({
  selector: 'basket-component',
  template: require('./basket.container.html')
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
    this.ngRedux.dispatch(this.toyActions.select(obj))
  }

  checkout() {
    this.router.navigate(['Checkout'])
  }

  private mapStateToThis(state) {
    return {
      toys: state.toyReducer.toys.filter(item => {
        return item.selected
      }),
      price: state.toyReducer.price
    };
  }
}

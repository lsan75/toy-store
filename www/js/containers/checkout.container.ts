import {Component, Inject, OnInit, OnDestroy} from '@angular/core'
import { NgRedux } from 'ng2-redux'

import UserActions from '../actions/user.actions'

@Component({
  selector: 'checkout-container',
  template: require('./checkout.container.html'),
  providers: [UserActions]
})

export default class CheckoutContainer implements OnDestroy, OnInit {
  public payed
  public user
  public price
  private unsub

  constructor(
    private ngRedux: NgRedux<any>,
    private userActions: UserActions
  ) {
    this.unsub = ngRedux.connect(this.mapStateToThis)(this)
  }

  ngOnInit() {
    this.ngRedux.dispatch(this.userActions.load())
  }

  ngOnDestroy() {
    this.unsub()
  }

  payIt() {
    this.ngRedux.dispatch(this.userActions.update(this.user))
    this.payed = true
  }

  private mapStateToThis(state) {
    return {
      user: state.userReducer,
      price: state.toyReducer.price
    }
  }

}

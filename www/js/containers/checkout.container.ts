import { Component, OnInit, OnDestroy } from '@angular/core'
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
  ) {}

  ngOnInit() {
    this.unsub = this.ngRedux.connect(this.mapStateToThis, () => {})(this)
    this.ngRedux.dispatch(<any>this.userActions.load())
  }

  ngOnDestroy() {
    this.unsub()
  }

  payIt() {
    this.ngRedux.dispatch(<any>this.userActions.update(this.user))
    this.ngRedux.dispatch(<any>this.userActions.pay())
  }

  private mapStateToThis(state) {
    return {
      user: state.userReducer,
      price: state.toyReducer.price,
      translate: state.translateReducer.translate
    }
  }

}

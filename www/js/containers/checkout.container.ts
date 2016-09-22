import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { NgRedux, select } from 'ng2-redux'

import UserActions from '../actions/user.actions'

@Component({
  selector: 'checkout-container',
  templateUrl: './checkout.container.html',
  providers: [UserActions]
})

export default class CheckoutContainer implements OnInit {
  public translate
  public user
  constructor(
    private ngRedux: NgRedux<any>,
    private userActions: UserActions
  ) {}

  @select(state => state.userReducer) userMap: Observable<any>
  @select(state => state.toyReducer.price) price: Observable<number>
  @select(state => state.translateReducer.translate) translateMap: Observable<any>

  ngOnInit() {
    this.ngRedux.dispatch(<any>this.userActions.load())
    this.translateMap.subscribe(res => {
      this.translate = res
    })
    this.userMap.subscribe(res => {
      this.user = res
    })
  }

  payIt() {
    this.ngRedux.dispatch(<any>this.userActions.update(this.user))
    this.ngRedux.dispatch(<any>this.userActions.pay())
  }

}

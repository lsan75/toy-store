import {Component, Inject, OnInit, OnDestroy} from 'angular2/core'
import {FORM_DIRECTIVES}    from 'angular2/common'
import UserActions from '../actions/user.actions'

@Component({
  selector: 'checkout-container',
  templateUrl: './js/containers/checkout.container.html',
  providers: [UserActions]
})

export default class CheckoutContainer implements OnDestroy {
  public payed
  public user
  public price
  private unsub

  constructor(
    @Inject('ngRedux') private ngRedux,
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

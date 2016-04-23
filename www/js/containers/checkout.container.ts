import {Component, Inject, OnDestroy} from 'angular2/core'

@Component({
  selector: 'checkout-container',
  templateUrl: './js/containers/checkout.container.html'
})
export default class CheckoutContainer implements OnDestroy {
  public user
  private unsub

  constructor(
    @Inject('ngRedux') private ngRedux
  ) {
    this.unsub = ngRedux.connect(this.mapStateToThis)(this)
  }

  ngOnDestroy() {
    this.unsub()
  }

  private mapStateToThis(state) {
    return {
      user: state.userReducer
    };
  }

}

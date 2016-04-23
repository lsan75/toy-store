import {Component, Inject, OnDestroy} from 'angular2/core'
import {Router} from 'angular2/router'
import ToyActions from '../actions/toy.actions'

@Component({
  selector: 'basket-component',
  templateUrl: './js/containers/basket.container.html'
})
export default class BasketContainer implements OnDestroy {
  public toys
  public price
  private unsub

  constructor(
    @Inject('ngRedux') private ngRedux,
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

import {Component, Inject, OnInit, OnDestroy} from 'angular2/core'
import {Observable} from 'rxjs/Rx'

import ToyComponent from '../components/toy.component'
import ToyActions from '../actions/toy.actions'
import ToyService from '../services/toy.service'

@Component({
  selector: 'toy-container',
  templateUrl: './js/containers/toy.container.html',
  directives: [ToyComponent],
  providers: [ToyActions, ToyService]
})
export default class ToyContainer implements OnInit, OnDestroy {

  public toys
  private unsub

  constructor(
    @Inject('ngRedux') private ngRedux,
    private toyActions: ToyActions
  ) {
    this.unsub = ngRedux.connect(this.mapStateToThis)(this)
  }

  ngOnInit() {
    this.ngRedux.dispatch(this.toyActions.getToys())
  }

  ngOnDestroy() {
    this.unsub()
  }

  private mapStateToThis(state) {
    return {
      toys: state.toyReducer
    };
  }

  select(obj) {
    this.ngRedux.dispatch(this.toyActions.select(obj))
  }
}

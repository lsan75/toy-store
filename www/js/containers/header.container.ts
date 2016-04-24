import {Component, Inject, OnDestroy} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
  selector: 'header-container',
  template: require('./header.container.html'),
  directives: [ROUTER_DIRECTIVES]
})
export default class HeaderContainer implements OnDestroy {
  public counter
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
      counter: state.toyReducer.toys.filter(item => {
        return item.selected
      }).length
    };
  }

}

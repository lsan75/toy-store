import { Component, OnInit, OnDestroy } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import { NgRedux } from 'ng2-redux'

@Component({
  selector: 'header-container',
  template: require('./header.container.html'),
  directives: [ROUTER_DIRECTIVES]
})
export default class HeaderContainer implements OnInit, OnDestroy {
  public counter
  public translate
  private unsub

  constructor(
    private ngRedux: NgRedux<any>
  ) {}

  ngOnInit() {
    this.unsub = this.ngRedux.connect(this.mapStateToThis)(this)
  }

  ngOnDestroy() {
    this.unsub()
  }

  private mapStateToThis(state) {
    return {
      counter: state.toyReducer.toys.filter(item => {
        return item.selected
      }).length,
      translate: state.translateReducer
    };
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgRedux } from 'ng2-redux'

import ToyComponent from '../components/toy.component'
import ToyActions from '../actions/toy.actions'
import FadeDirective from '../directives/fade.directive'

@Component({
  selector: 'toy-container',
  template: require('./toy.container.html'),
  directives: [ToyComponent, FadeDirective]
})

export default class ToyContainer implements OnInit, OnDestroy {

  public toys
  private unsub

  constructor(
    private ngRedux: NgRedux<any>,
    private toyActions: ToyActions
  ) {}

  ngOnInit() {
    this.unsub = this.ngRedux.connect(this.mapStateToThis)(this)
    this.ngRedux.dispatch( this.toyActions.getToys() )
  }

  ngOnDestroy() {
    this.unsub()
  }

  onSelect(obj) {
    this.ngRedux.dispatch( this.toyActions.selectToy(obj) )
  }

  private mapStateToThis(state) {
    return {
      toys: state.toyReducer.toys
    }
  }

}

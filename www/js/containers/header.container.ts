import { Component, OnInit, OnDestroy } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import { NgRedux } from 'ng2-redux'

import TranslateActions from '../actions/translate.actions'

@Component({
  selector: 'header-container',
  template: require('./header.container.html'),
  directives: [ROUTER_DIRECTIVES]
})
export default class HeaderContainer implements OnInit, OnDestroy {
  public counter
  public translate
  public langs
  private unsub

  constructor(
    private ngRedux: NgRedux<any>,
    private translateActions: TranslateActions
  ) {}

  ngOnInit() {
    this.unsub = this.ngRedux.connect(this.mapStateToThis, () => {})(this)
  }

  ngOnDestroy() {
    this.unsub()
  }

  public selectLang = lang => {
    this.ngRedux.dispatch( <any>this.translateActions.setLang(lang.label) )
  }

  private mapStateToThis(state) {
    return {
      counter: state.toyReducer.counter,
      translate: state.translateReducer.translate,
      langs: state.translateReducer.langs
    };
  }

}

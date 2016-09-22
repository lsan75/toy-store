import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { NgRedux, select } from 'ng2-redux'

import TranslateActions from '../actions/translate.actions'

@Component({
  selector: 'header-container',
  templateUrl: './header.container.html'
})
export default class HeaderContainer implements OnInit {
  public translate

  constructor(
    private ngRedux: NgRedux<any>,
    private translateActions: TranslateActions
  ) {}

  public selectLang = lang => {
    this.ngRedux.dispatch( <any>this.translateActions.setLang(lang.label) )
  }

  @select(state => state.toyReducer.counter) counter: Observable<number>
  @select(state => state.translateReducer.translate) translateMap: Observable<Object>
  @select(state => state.translateReducer.langs) langs: Observable<any>

  ngOnInit() {
    this.translateMap.subscribe(res => {
      this.translate = res
    })
  }
}

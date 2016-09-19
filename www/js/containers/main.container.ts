import { Component, OnInit } from '@angular/core'
import { NgRedux } from 'ng2-redux'

import ToyActions from '../actions/toy.actions'
import ToyService from '../services/toy.service'
import TranslateActions from '../actions/translate.actions'
import I18nService from '../services/i18n.service'

@Component({
  selector: 'main-container',
  templateUrl: './main.container.html',
  providers: [ToyActions, TranslateActions, ToyService, I18nService]
})

export default class MainContainer implements OnInit {
  constructor(
    private ngRedux: NgRedux<any>,
    private translateActions: TranslateActions
  ) {}

  ngOnInit() {
    this.ngRedux.dispatch( <any>this.translateActions.setLang('en') )
  }
}

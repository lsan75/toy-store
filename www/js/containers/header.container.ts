import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
  selector: 'header-container',
  templateUrl: './js/containers/header.container.html',
  directives: [ROUTER_DIRECTIVES]
})
export default class HeaderContainer {}

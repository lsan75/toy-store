import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import BasketContainer from './basket.container'
import HeaderContainer from './header.container'
import ToyContainer from './toy.container'

@Component({
  selector: 'main-container',
  directives: [HeaderContainer, ROUTER_DIRECTIVES],
  templateUrl: './js/containers/main.container.html'
})

@RouteConfig([
  {
    path: '/toys',
    name: 'Toys',
    component: ToyContainer,
    useAsDefault: true
  },
  {
    path: '/basket',
    name: 'Basket',
    component: BasketContainer
  }
])

export default class MainContainer {}

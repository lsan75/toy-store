import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import BasketContainer from './basket.container'
import CheckoutContainer from './checkout.container'
import HeaderContainer from './header.container'
import ToyContainer from './toy.container'

import ToyActions from '../actions/toy.actions'
import ToyService from '../services/toy.service'

@Component({
  selector: 'main-container',
  directives: [HeaderContainer, ROUTER_DIRECTIVES],
  template: require('./main.container.html'),
  providers: [ToyActions, ToyService]
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
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutContainer
  }
])

export default class MainContainer {}

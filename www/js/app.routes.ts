import { ModuleWithProviders }  from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import ToyContainer from './containers/toy.container'
import BasketContainer from './containers/basket.container'
import CheckoutContainer from './containers/checkout.container'

const appRoutes: Routes = [
  {
    path: 'toys',
    component: ToyContainer
  },
  {
    path: 'basket',
    component: BasketContainer
  },
  {
    path: 'checkout',
    component: CheckoutContainer
  },
  {
    path: '',
    redirectTo: '/toys',
    pathMatch: 'full'
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true })

// imports libs
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux'
import { routing } from './app.routes'

import { LocationStrategy, HashLocationStrategy } from '@angular/common/index'

// import the main container
import MainContainer from './containers/main.container'
import ToyContainer from './containers/toy.container'
import BasketContainer from './containers/basket.container'
import CheckoutContainer from './containers/checkout.container'
import ToyComponent from './components/toy.component'
import HeaderContainer from './containers/header.container'
import { ToyInputComponent } from './components/toy-input.component'

// import redux store
import rootReducer, { IAppState } from './reducers/index'
const thunk = require('redux-thunk').default
const createLogger = require('redux-logger')

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot(),
    routing
  ],
  declarations: [
    MainContainer,
    HeaderContainer,
    ToyContainer,
    BasketContainer,
    CheckoutContainer,
    ToyComponent,
    ToyInputComponent
  ],
  bootstrap: [MainContainer]
})
export default class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension
  ) {

    const extensions = [thunk]
    const myTools = []
    if (process.env.NODE_ENV === 'dev') {
      extensions.push(createLogger())
      myTools.push(devTools.isEnabled() ? devTools.enhancer() : f => f)
    }

    ngRedux.configureStore(
      rootReducer,
      {},
      extensions,
      myTools
    )
  }
}

import {bootstrap} from 'angular2/platform/browser'
import {enableProdMode} from 'angular2/core'
import 'rxjs/Rx'

import MainContainer from './containers/main.container'

enableProdMode()
bootstrap(MainContainer, [])
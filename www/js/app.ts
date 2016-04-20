import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS}   from 'angular2/router';
import 'rxjs/Rx'

import MainContainer from './containers/main.container'

bootstrap(MainContainer, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
])

import angular from 'angular';

//config
import routes from './app.routes';

//internal
import pagesComponent from './pages';
import subpageDirective from './subpage';
import spotsDirective from './spots';
import commerceModule from './commerce';

//external
import 'angular-ui-router';
import '../style/app.scss';
import ngSanitize from 'angular-sanitize';

let app = () => {
  return {
    template: require('./app.html'),
    controller: AppCtrl.UID,
    controllerAs: 'vm'
  }
};

class AppCtrl {
  static get UID() {
    return 'AppCtrl';
  }
  constructor() {
    this.pages = pages;
  }
}

const MODULE_NAME = 'app';
/*@ngInject*/
angular.module(MODULE_NAME, [
  'ui.router',
  ngSanitize,
  pagesComponent,
  subpageDirective,
  spotsDirective,
  commerceModule
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(routes);

export default MODULE_NAME;

export const pages = [{
  text: 'Forside',
  link: 'bICCgfCphK'
}, {
  text: 'Underside 1',
  link: 'bNWdVLeJOW'
}, {
  text: 'Underside 2',
  link: 'coDQrWQZxK'
}, {
  text: 'Produkter',
  link: 'bUGgYdIhQi'
}];
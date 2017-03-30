import angular from 'angular';
import controller from './pages.controller';
import routes from './pages.routes';
import service from './pages.resolve.service';

const MODULE_NAME = "pages"

/*@ngInject*/
angular.module(MODULE_NAME, [])
.service(service.UID, service)
.controller(controller.UID, controller)
.config(routes)
.name

export default MODULE_NAME;
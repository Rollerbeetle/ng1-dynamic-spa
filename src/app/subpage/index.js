import angular from 'angular';
import directive from './subpage.directive';
import config from './subpage.config';

const MODULE_NAME = "subpage"

/*@ngInject*/
angular.module(MODULE_NAME, [])
.directive(MODULE_NAME, directive)
.config(config)
.name;

export default MODULE_NAME;
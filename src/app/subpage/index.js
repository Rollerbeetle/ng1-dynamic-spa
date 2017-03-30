import angular from 'angular';
import directive from './subpage.directive';
import config from './subpage.config';

const MODULE_NAME = "subpage"

angular.module(MODULE_NAME, [])
.directive(MODULE_NAME, directive)
.run(config)
.name;

export default MODULE_NAME;
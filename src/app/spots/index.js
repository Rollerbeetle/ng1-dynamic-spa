import angular from 'angular';
import directive from './spots.directive';
import config from './spots.config';

const MODULE_NAME = "spots"

angular.module(MODULE_NAME, [])
.directive(MODULE_NAME, directive)
.run(config)
.name;

export default MODULE_NAME;
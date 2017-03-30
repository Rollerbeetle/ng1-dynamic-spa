import angular from 'angular';
import cacheFactory from './cache.factory';

const MODULE_NAME = "shared"

angular.module(MODULE_NAME, [])
.factory('SharedCache', cacheFactory);

export default MODULE_NAME;
/*@ngInject*/
export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
  "ngInject";
    $stateProvider.state('/', {});
    $locationProvider.html5Mode({enabled: true, requireBase: false});
};
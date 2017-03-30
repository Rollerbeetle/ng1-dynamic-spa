
/*@ngInject*/
export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state('/', {});
    $locationProvider.html5Mode({enabled: true, requireBase: false});
};
import controller from './pages.controller';

/*@ngInject*/
export default ['$stateProvider' ,'$urlRouterProvider' ,function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state('page', {
        url: '/:dataLink',
        template: '<subpage data="vm.page"></subpage>',
        controller: controller.UID,
        controllerAs: 'vm',
        resolve: {
            /*@ngInject*/
            page: (PagesResolveService, $stateParams) => {
                return PagesResolveService.resolve($stateParams.dataLink);
            }
        }
    })
}];
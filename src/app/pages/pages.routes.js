import controller from './pages.controller';

/*@ngInject*/
export default function routes($stateProvider, $urlRouterProvider) {
  "ngInject";

    $stateProvider.state('page', {
        url: '/:dataLink',
        template: '<subpage data="vm.page"></subpage>',
        controller: controller.UID,
        controllerAs: 'vm',
        resolve: {
            /*@ngInject*/
            page: (PagesResolveService, $stateParams) => {
              "ngInject";

                return PagesResolveService.resolve($stateParams.dataLink);
            }
        }
    })
};
import controller from './pages.controller';

/*@ngInject*/
export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state('page', {
        url: '/:dataLink',
        template: require('./pages.tpl.html'),
        controller: controller.UID,
        controllerAs: 'vm',
        resolve: {
            /*@ngInject*/
            page: (PagesResolveService, $stateParams) => {
                return PagesResolveService.resolve($stateParams.dataLink);
            }
        }
    })
};
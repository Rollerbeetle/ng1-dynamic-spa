
export default {
  UID: 'favorite',
  template: `
    <button
      ng-click="vm.toggleFavorite()"
      class="fa"
      ng-class="{'fa-heart-o': !vm.product.isfavorite, 'fa-heart': vm.product.isfavorite}"
    </button>
	`,
  controller: FavoriteCtrl,
  controllerAs: 'vm',
  bindings: {
    product: '=',
    toggleFavorite: '&'
  }
}

/*@ngInject*/
function FavoriteCtrl() {
}
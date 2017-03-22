
export default {
  UID: 'favorite',
  template: `
    <button
      ng-click="vm.product.isfavorite = !vm.product.isfavorite"
      class="fa"
      ng-class="{'fa-heart-o': !vm.product.isfavorite, 'fa-heart': vm.product.isfavorite}"
    </button>
	`,
  controller: FavoriteCtrl,
  controllerAs: 'vm',
  bindings: {
    product: '='
  }
}

/*@ngInject*/
function FavoriteCtrl() {
}
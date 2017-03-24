
export default {
  UID: 'addToBasket',
  template: `
    <div ng-if="!vm.product.basketCount">
			<button ng-click="vm.buy({count: 1})" ng-disabled="!vm.product.availability">Køb</button>
		</div>
		<div ng-if="vm.product.basketCount">
			<button ng-click="vm.buy({count: vm.product.basketCount-1})">-</button>
			{{vm.product.basketCount}}
			<button ng-click="vm.buy({count: vm.product.basketCount+1})">+</button>
		</div>
	`,
  controller: AddToBasketCtrl,
  controllerAs: 'vm',
  bindings: {
    product: '=',
    buy: '&onPurchase'
  }
}

/*@ngInject*/
function AddToBasketCtrl() {
}
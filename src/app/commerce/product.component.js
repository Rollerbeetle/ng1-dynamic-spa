
export default {
  UID: 'product',
  template: `
		<div ng-style="{'opacity': vm.product.availability ? 1 : 0.5}">
			<h5>{{vm.product.name}}</h5>
			<favorite product="vm.product" (toggleFavorite)="onToggleFavorite()">fav</favorite>
			<div>Pris: {{vm.product.price}}</div>
			<add-to-basket product="vm.product" (purchase)="onPurchase($event)"></add-to-basket>
		</div>
	`,
  controller: ProductCtrl,
  controllerAs: 'vm',
  bindings: {
    product: '=data'
  }
}

/*@ngInject*/
function ProductCtrl() {
}
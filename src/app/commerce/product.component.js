
export default {
  UID: 'product',
  template: `
		<div ng-style="{'opacity': vm.product.availability ? 1 : 0.5}">
			<h5>{{vm.product.name}}</h5>
			<favorite product="vm.product" toggle-favorite="vm.toggleFavorite()">fav</favorite>
      <img ng-src="{{vm.product.image}}" height="200" width="200" />
			<div class="price">Pris: {{vm.product.price}}</div>
			<add-to-basket product="vm.product" on-purchase="vm.buy(count)"></add-to-basket>
		</div>
	`,
  controller: ProductCtrl,
  controllerAs: 'vm',
  bindings: {
    product: '=data',
    purchase: '&',
    toggleFavorite: '&'
  }
}

/*@ngInject*/
function ProductCtrl() {
  this.buy = (count) => {
    this.purchase({product: this.product, count});
  }

  this.toggleFavorite = () => {
    this.toggleFavorite({product: this.product});
  }

}

export default {
  UID: 'product',
  template: `
		<div ng-style="{'opacity': vm.product.availability ? 1 : 0.5}">
			<h5>{{vm.product.name}}</h5>
			<favorite product="vm.product" toggle-favorite="vm.toggleFavorite()">fav</favorite>
			<div>Pris: {{vm.product.price}}</div>
			<add-to-basket product="vm.product" on-purchase="vm.buy(count)"></add-to-basket>
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

  this.buy = (count) => {
    this.product.basketCount = count;
    console.log(this.product);
  }

  this.toggleFavorite = () => {
    this.product.isfavorite = !this.product.isfavorite;
  }

}

export default {
  UID: 'productList',
  template: `
  <button [style.fontWeight]="params.sortBy === 'name' ? 'bold' : ''" ng-click="vm.sort('name')">Navn</button>
  <button [style.fontWeight]="params.sortBy === 'price' ? 'bold' : ''" ng-click="vm.sort('price')">Pris</button>
  <button [style.fontWeight]="params.filter === 'isfavorite' ? 'bold' : ''" ng-click="vm.toggleShowFavorites()">Only favorites</button>
  <div class="items">
    <product data="product" ng-repeat="product in vm.products" ></product>
  </div>
  `,
  controller: ProductListCtrl,
  controllerAs: 'vm'
}

/*@ngInject*/
function ProductListCtrl(ProductService) {
    this.products = []
    ProductService.get().then(data => this.products = data);
}
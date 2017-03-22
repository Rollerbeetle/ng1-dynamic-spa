
export default {
  UID: 'productList',
  template: `
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
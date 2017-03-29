
export default {
  UID: 'productList',
  template: `
  <button ng-style="{'font-weight': vm.params.sortBy === 'name' ? 'bold' : ''}" ng-click="vm.sort('name')">Navn</button>
  <button ng-style="{'font-weight': vm.params.sortBy === 'price' ? 'bold' : ''}" ng-click="vm.sort('price')">Pris</button>
  <button ng-style="{'font-weight': vm.params.filter === 'isfavorite' ? 'bold' : ''}" ng-click="vm.toggleShowFavorites()">Only favorites</button>
  <div class="items">
    <product data="product" ng-repeat="product in vm.products | orderBy: vm.params.sortBy | filter:vm.filter" ></product>
  </div>
  `,
  controller: ProductListCtrl,
  controllerAs: 'vm'
}

/*@ngInject*/
function ProductListCtrl(ProductService) {
    this.products = []
    this.params = {
      sortBy: 'name',
  		sortDir: '+',
  		filter:''
    }
    ProductService.get().then(data => this.products = data);

    this.sort = (key) => {
      this.params.sortBy = key;
    }

    this.toggleShowFavorites = () => {
      if (this.params.filter) {
        this.params.filter = '';
      } else {
        this.params.filter = 'isfavorite'
      }
    }

    this.filter = (value, index, array) => {
      if (this.params.filter) {
        return value[this.params.filter];
      } else {
        return true;
      }
    }

}
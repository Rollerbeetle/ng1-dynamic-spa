const url = 'http://www.json-generator.com/api/json/get/celLKmqymq';

export default class ProductService {

  static get UID() {
    return 'ProductService';
  }

  /*@ngInject*/
  constructor($http, SharedCache) {
    this.$http = $http;
    this.cache = SharedCache;

    this.products = this.cache.get('products') ? this.cache.get('products') : [];
  }

  getProducts() {
    if (this.products.length) {
      return new Promise(resolve => {
        resolve(this.products)
      });
    }
    return this.$http.get(url)
      .then(response => {
        this.cache.put('products', response.data);
        this.products = response.data;
        return response.data;
      });
  }
}
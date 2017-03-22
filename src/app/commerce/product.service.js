const url = 'http://www.json-generator.com/api/json/get/celLKmqymq';

export default class ProductService {

  static get UID() {
    return 'ProductService';
  }

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  get() {
    return this.$http.get(url)
      .then(response => {
        return response.data;
      });
  }
}
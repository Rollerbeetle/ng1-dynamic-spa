

const BASE_URL = 'http://www.json-generator.com/api/json/get/';

export default class PagesResolveService {
  static get UID () {
    return 'PagesResolveService';
  }

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  resolve(uri) {
    return this.$http.get(BASE_URL + uri)
      .then(response => {
        return response.data;
      });
  }
}


const BASE_URL = 'http://www.json-generator.com/api/json/get/';

export default class PagesResolveService {

  static get UID() {
    return 'PagesResolveService';
  }

  /*@ngInject*/
  constructor($http, SharedCache) {
    "ngInject";
    this.$http = $http;
    this.cache = SharedCache;
  }

  resolve(uri) {
    if (this.cache.get(uri)) {
      return this.cache.get(uri);
    }
    return this.$http.get(BASE_URL + uri)
      .then(response => {
        this.cache.put(uri, response.data);
        return response.data;
      });
  }
}
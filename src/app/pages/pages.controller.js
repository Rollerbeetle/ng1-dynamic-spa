

/*@ngInject*/
export default class PagesCtrl {
  static get UID() {
    return 'PagesCtrl';
  }
  /*@ngInject*/
  constructor(page) {
    this.page = page;
  }
}



export default class PagesCtrl {
  static get UID() {
    return 'PagesCtrl';
  }

  constructor(page) {
    "ngInject";

    this.page = page;
  }
}
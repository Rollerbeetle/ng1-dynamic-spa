


export default class PagesCtrl {
  static get UID() {
    return 'PagesCtrl';
  }

  constructor(page) {
    this.page = page;
    console.log(page);
  }
}

/*@ngInject*/
export default function($templateCache) {
  $templateCache.put('frontpage.tpl.html', require('./frontpage.tpl.html'));
  $templateCache.put('subpage.tpl.html', require('./subpage.tpl.html'));
  $templateCache.put('subpage-sidebar.tpl.html', require('./subpage-sidebar.tpl.html'));
  $templateCache.put('products.tpl.html', require('./products.tpl.html'));
}
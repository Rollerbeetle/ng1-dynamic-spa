
/*@ngInject*/
export default function($templateCache) {
   $templateCache.put('text.tpl.html', '<div ng-bind-html="spot.content"></div>');
   $templateCache.put('gallery.tpl.html', '<img ng-src="{{img}}" alt="" ng-repeat="img in spot.images" />');
  // $templateCache.put('subpage-sidebar.tpl.html', require('./subpage-sidebar.tpl.html'));
  // $templateCache.put('products.tpl.html', require('./products.tpl.html'));
}
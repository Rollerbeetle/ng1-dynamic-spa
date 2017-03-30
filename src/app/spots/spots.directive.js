/*@ngInject*/
export default function() {


  return {
    template: '<ng-include ng-repeat="spot in spots" src="getTemplateUrl(spot)"/>',
    scope: {
        spots: '=data'
    },
    restrict: 'E',
    /*@ngInject*/
    controller: function($scope) {
      //function used on the ng-include to resolve the template
      $scope.getTemplateUrl = function(spot) {
        //basic handling
        return `${spot.type.toLowerCase()}.tpl.html`;
      }
    }
  };

}
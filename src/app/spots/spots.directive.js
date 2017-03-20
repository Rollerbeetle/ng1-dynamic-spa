
export default function() {


  return {
    template: '<ng-include ng-repeat="spot in spots" src="getTemplateUrl(spot)"/>',
    scope: {
        spots: '=data'
    },
    restrict: 'E',
    controller: function($scope) {
      $scope.data = $scope.spots;
      //function used on the ng-include to resolve the template
      $scope.getTemplateUrl = function(spot) {
        console.log(spot);
        //basic handling
        return `${spot.type.toLowerCase()}.tpl.html`;
      }
    }
  };

}
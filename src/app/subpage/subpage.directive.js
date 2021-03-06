
export default function() {


  return {
    template: '<ng-include src="::getTemplateUrl()"/>',
    scope: {
        subpage: '=data'
    },
    restrict: 'E',
    controller: function($scope) {
      "ngInject";
      $scope.data = $scope.subpage.data;
      //function used on the ng-include to resolve the template
      $scope.getTemplateUrl = function() {
        //basic handling
        return `${$scope.subpage.template.toLowerCase()}.tpl.html`;
      }
    }
  };

}
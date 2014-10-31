angular.module('phoneModule', [])
  .controller('phoneCtrl', ['$scope', function($scope) {
    $scope.callHome = function(message) {
      alert(message);
    };
  }]);
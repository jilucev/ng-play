angular.module('fisherman', [])
  .controller('formController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(fisherman) {
      $scope.master = angular.copy(fisherman);
    };

    $scope.reset = function() {
      $scope.fisherman = angular.copy($scope.master);
    };

    $scope.reset();
  }]);

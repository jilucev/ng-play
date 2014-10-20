angular.module('shape', [])
  .controller('shapeCtrl', ['$scope', function($scope) {
    $scope.shape = 'square'

    $scope.changeShape = function() {

      if ($scope.shape == 'square') {
        $scope.shape = 'circle'
        console.log($scope.shape)
      }
      else if ($scope.shape == 'circle') {
        $scope.shape = 'square'
      }
    }
  }])

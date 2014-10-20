angular.module('color', [])
  .controller('colorCtrl', ['$scope', function($scope) {
    $scope.color = 'start'
    console.log($scope.color)

    $scope.changeColor = function() {
      switch ($scope.color) {
          case "start":
              $scope.color = "one"
              break
          case "one":
              $scope.color = "two"
              break
          case "two":
              $scope.color = "three"
              break
          case "three":
              $scope.color = "four"
              break
          case "four":
              $scope.color = "five"
              break
          case "five":
              $scope.color = "six"
              break
          case "six":
              $scope.color = "seven"
          case "seven":
              $scope.color = "start"
      }
    }

    $scope.resetColor = function() {
      $scope.color = 'start'
    }
  }])

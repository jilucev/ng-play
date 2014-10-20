angular.module('gumball', [])
  .controller('gumballCtrl', ['$scope', function($scope) {
    $scope.showGumballs = false

    $scope.gumballs = [
      {number: "one" },
      {number: "two"},
      {number: "three" },
      {number: "four" },
    ]
  }])

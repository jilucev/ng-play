angular.module('treasureTrolls', [])
  .controller('trollsCtrl', ['$scope', function($scope) {
    $scope.edward = {
      name: 'Edward',
      haircolor: 'green'
    }

    $scope.jeremy = {
      name: 'jeremy',
      haircolor: 'purple'
    }
  }])
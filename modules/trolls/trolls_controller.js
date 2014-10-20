angular.module('treasureTrolls', [])
  .controller('trollsCtrl', ['$scope', function($scope) {
    $scope.troll = {
      name: 'Edward',
      haircolor: 'green'
    }
  }])
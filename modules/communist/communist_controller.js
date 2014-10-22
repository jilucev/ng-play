angular.module('communist')
  .controller("workerCtrl", ['$scope', function($scope) {
    $scope.logChore = function(chore) {
      alert(chore + " is done!");
    };
  }]);
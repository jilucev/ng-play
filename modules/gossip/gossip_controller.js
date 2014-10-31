angular.module('gossipModule', [])
  .controller('gossipCtrl', ['$scope', function($scope) {
    $scope.leaveVoicemail = function(number, message) {
      alert('Number: ' + number + ' said:' + message)
    };
  }]);
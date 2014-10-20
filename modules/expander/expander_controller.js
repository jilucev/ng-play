angular.module('expanderModule')
  .controller('expanderCtrl', ['$scope', function($scope) {
    $scope.title = 'Click me to see something naughty'
    $scope.text = 'Oh la la!'
                            + 'check this'
  }])

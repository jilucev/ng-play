angular.module('lumberJack', [])
  .directive('lumberJack', function() {
    return {
      restrict: 'E',
      templateUrl: 'modules/lumber_jack/lumber_jack.html'
    }
  })

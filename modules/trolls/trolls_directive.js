angular.module('treasureTrolls')
  .directive('trollsDirective', function () {
    return {
      restrict: 'EA',
      templateUrl: 'modules/trolls/trolls.html'
    }
  });
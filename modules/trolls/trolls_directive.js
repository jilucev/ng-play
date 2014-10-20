angular.module('treasureTrolls')
  .directive('trollsDirective', function () {
    return {
      restrict: 'EA',
      template: 'Name: {{troll.name}} Hair Color: {{troll.haircolor}}'
    }
  });
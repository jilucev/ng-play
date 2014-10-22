angular.module('communist', [])
  .directive('worker', function() {
    return {
      restrict: 'E',
      scope: {
        done: "&"
      },
      template: 'Give comrade task:<input type="text" ng-model="chore">' +
        ' ' + 
        '<div class="button" ng-click="done({chore: chore})">I\'m done</div>'
    };
  });
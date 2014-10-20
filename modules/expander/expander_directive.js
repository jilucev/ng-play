angular.module('expanderModule', [])
  .directive('expander', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: { title: '@expanderTitle' },

      template: '<div>' +
         '<div class="title" ng-click="toggle($event)">{{title}}</div>' +
         '<div class="body closed" ng-transclude></div>' +
         '</div>',
      link: function(scope, element, attrs) {
        scope.toggle = function(e) {
          angular.element(e.srcElement.parentElement.querySelector('.body')).toggleClass('closed')
        }
      }
    }
  })

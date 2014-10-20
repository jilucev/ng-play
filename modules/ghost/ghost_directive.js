angular.module('ghost', [])
  .directive('ghost', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        hide: '@'
      },
      link: function(scope, ele) {
        scope.toggleHide = function() {
          ele.find('img').toggleClass(scope.hide)
        }
      },
      template: '<div ng-mouseenter="toggleHide()" ng-mouseleave="toggleHide()" ng-transclude></div>'
    }
  })

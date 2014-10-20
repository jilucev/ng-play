angular.module('haiku', [])
  .directive('haiku', function() {
    return {
      restrict: "E",
      transclude: true,
      template: "<p>For all the breathing</p><div ng-transclude></div><p>I am not wiser </p>"
    }
  });

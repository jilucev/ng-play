angular.module('triviaModule', [])
  .directive('smartPassword', function() {
    var validElement = angular.element('<div>{{ model.input}}</div>')
   
    return {
    restrict: "E",
    replace: true,
    template: '<div><input type="text" ng-model="model.input"><img class="lala"/></div>',
    compile: function(tElem) {
      tElem.append(validElement);

        return function(scope) {
          scope.$watch('model.input', function(value) {
            if (value.toLowerCase() === "fellini") {
              validElement.toggleClass('alert-class')
            }
          })
        }
      }
    }
  });
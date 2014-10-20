angular.module('season', [])
  .directive('season', function() {
    return {
      restrict: 'E',
      compile: function(element, attrs) {
        var types = []
        for (var attr in attrs) {
          if (attr === 'rain' ||
              attr === 'sun' ||
              attr === 'leaves' ||
              attr === 'snow') {
            types.push(attr)
          }
        }

        for (var type in types) {
          element.addClass(types[type] + '-season')
        }
      }
    }
  })

// we are changing the directive's behavior before it gets innitiated,
// So compile is basically setting up what the directive is going to do based on the options you gave it.
// This behavior is set by the controller, but compile is part of creating the directive.


// Some directives such as ng-repeat clone DOM elements once for each item in a collection.
// Having a compile and link phase improves performance since the cloned template only needs
// to be compiled once, and then linked once for each clone instance.
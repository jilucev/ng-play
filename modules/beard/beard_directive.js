angular.module('beard', [])
  .directive('beard', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.wrap('<div class="beard-wrapper">')
        var beardWrapper = element.parent()
        var oldSource = attrs.src

        var showShaven = function(e) {
          element.attr('src', attrs.freshSrc)
        }

        var hideShaven = function(e) {
          element.attr('src', oldSource)
        }

        beardWrapper.bind('mouseenter', showShaven)
        beardWrapper.bind('mouseleave', hideShaven)
      }
    }
  })
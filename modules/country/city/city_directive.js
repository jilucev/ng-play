angular.module('country')
  .directive('city', function() {
    return {
      restrict: "E",
      require: ["^country", "^province"],
      link: function(scope, element, attrs, ctrls) {
        ctrls[0].makeAnnouncement("from city")
        ctrls[1].makeLaw("Eat fewer jellybeans than you'd like in order to improve longevity.")
      }
    }
  })

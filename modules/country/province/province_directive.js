angular.module('country')
  .directive('province', function() {
    return {
      restrict: "E",
      require: "^country",
      controller: function() {
        this.makeLaw = function(law) {
          console.log("law:" + law);
        }
      }
    }
  })

angular.module('country', [])
  .directive('country', function() {
    return {
      restrict: "E",
      controller: function() {
        this.makeAnnouncement = function(message) {
          console.log("country says:" + message);
        }
      }
    }
  })

angular.module('lumberJack')
  .directive("song", function() {
    return {
      restrict: "A",
      link: function() {
        console.log("I'm a lumberjack and I'm")
      },
      template: '<h1>Hello World</h1>'
    }
  })

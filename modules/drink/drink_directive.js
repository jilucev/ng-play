angular.module('drinkModule')
  .directive('drink', function() {
    return {
      scope: {
        "@"
      },
      template: '<div></div>',
    };
  });
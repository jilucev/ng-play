angular.module('phoneModule')
  .directive('phone', function() {
    return {
      scope: {
        dial: "&"
      },
      template: '<input type="text" ng-model="value">' +
      '<div class="button" ng-click="dial({message:value})">Megaphone!</div>',
    };
  });

  // clicking the button invokes the controller scope



  // angular.module('phoneModule', [])
  // .controller('phoneCtrl', ['$scope', function($scope) {
  //   $scope.callHome = function(message) {
  //     alert(message);
  //   };
  // }]);

// because of the & sign, we can associate a value with message and then interact with it in the controller.
// So message is set to the argument passed to dial.
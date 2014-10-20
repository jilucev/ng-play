angular.module('accordionModule')
  .controller('accordionCtrl', ['$scope', function($scope) {
    $scope.expanders = [
      { title: 'click me to view content', text: "I am content1" },
      { title: 'click me to view content', text: "I am content2" },
      { title: 'click me to view content', text: "I am content3" }
    ];
  }]);

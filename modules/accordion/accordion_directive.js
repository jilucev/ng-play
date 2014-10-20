angular.module('accordionModule', [])
  .directive('accordion', function() {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      template: '<div ng-transclude></div>',
      controller: ['$scope', function($scope) {
        var expanders = [];

        $scope.expanders = [
          {title: 'click1', text: "content1"},
          {title: 'click2', text: "content2"},
          {title: 'click3', text: "content3"}
        ];

        this.gotOpened = function(selectedExpander) {
          angular.forEach(expanders, function(expander) {
            if(selectedExpander != expander) {
              expander.showMe = false;
            }
          });
        }

        this.addExpander = function(expander) {
          expanders.push(expander)
        }
      }]
    }
  })
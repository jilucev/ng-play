angular.module('squirtModule', [])
  .controller('squirtCtrl', function($scope) {
    this.squirtWater = function() {
      alert('SQUIRT!');
    }
    return $scope.squirtCtrl = this;
  })
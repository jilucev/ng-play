angular.module('teaVarieties', [])
  .controller('teaVarietiesCtrl', ['$scope', function($scope) {
    $scope.showTeas = false
    $scope.teas = [{
        name: "Oolong",
        price: "7",
        brew_temp: "94"
      }, {
        name: "Green",
        price: "11",
        brew_temp: "72"
      }, {
        name: "Jasmine",
        price: "5",
        brew_temp: "98"
      }, {
        name: "Mint",
        price: "3",
        brew_temp: "98"
      }, {
        name: "Black",
        price: "4",
        brew_temp: "98"
      }]
  }])

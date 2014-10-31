angular.module('gossipModule')
  .directive('gossip', function($templateCache) {
    console.log($templateCache.get("modules/gossip/gossip.html"))
    return {
      restrict: 'E',
      scope: {
        number: '@',
        network: '=',
        makeCall: '&'
      },
      template: $templateCache.get("modules/gossip/gossip.html"),
      link: function(scope) {
        scope.networks = ["net1", "net2", "net3"];
        scope.network = scope.networks[0];
      }
    };
  });
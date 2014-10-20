// angular.module('expanderModule', [])
//   .directive('expander', function() {
//     return {
//       restrict: 'EA',
//       replace: true,
//       transclude: true,
//       scope: { title: '@expanderTitle' },

//       template: '<div>' +
//          '<div class="title" ng-click="toggle($event)">{{title}}</div>' +
//          '<div class="body closed" ng-transclude></div>' +
//          '</div>',
//       link: function(scope, element, attrs) {
//         var titleElement = angular.element(element.children().eq(0));
//         var bodyElement = angular.element(element.children().eq(1));

//         titleElement.bind('click', toggle);

//         function toggle() {
//           bodyElement.toggleClass('closed');
//         }
//       }
//     }
//   })      








 
        }
      }
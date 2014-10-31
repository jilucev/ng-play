angular.module('skittlesModule')
  .directive('skittles', function() {
    return {
      scope: {
        flavor: "="
      },
      template: '<div></div>'
    }
  })

  // the = binds inputs to their respective modals. Each input will modify the other's modal value
  // https://thinkster.io/egghead/isolate-scope-eq/
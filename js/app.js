angular.module('Five', ['ionic', 'Five.services', 'Five.controllers', 'Five.directives'])


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('content', {
      url: "/",
      controller: 'FiveContentCtrl',
      templateUrl: "templates/content.html"
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});


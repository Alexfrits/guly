var gulyApp = angular.module('gulyApp', [
  'ngRoute',
  'hintsListControllers'
]);

gulyApp.config(['$routeProvider',

  function($routeProvider) {
    $routeProvider
    .when('/astuces', {
        templateUrl: 'partials/astuces.html',
        controller: 'HintsListCtrl'
      })
      .when('/water-tracker', {
        templateUrl: 'partials/water-tracker.html',
        // controller: 'HintsListCtrl'
      })
      .when('/astuces/:astuceId', {
        templateUrl: 'partials/astuce-detail.html',
        controller: 'HintDetailCtrl'
      })
    .otherwise({
      redirectTo:'/water-tracker'
    });
  }
]);

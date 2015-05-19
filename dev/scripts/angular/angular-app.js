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
    .otherwise({
      redirectTo:'/water-tracker'
    });
  }
]);

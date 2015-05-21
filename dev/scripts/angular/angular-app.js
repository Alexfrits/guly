var gulyApp = angular.module('gulyApp', [
  'ngRoute',
  'mainNavModule',
  'gooeyMenuModule',
  'hintsListControllers',
  'LocalStorageModule',
  'formControllers',
  'switchControllers',
  'gulyFilters'
]);

gulyApp.config(['$routeProvider', 'localStorageServiceProvider',

  // Navigation Routes
  function($routeProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/water-tracker', {
        templateUrl: 'partials/water-tracker.html',
      })
      .when('/profil', {
          templateUrl: 'partials/profil.html',
        })
      .when('/statistiques', {
          templateUrl: 'partials/statistiques.html',
        })
      .when('/astuces', {
          templateUrl: 'partials/astuces.html',
          controller: 'HintsListCtrl'
        })
      .when('/astuces/:astuceId', {
        templateUrl: 'partials/astuce-detail.html',
      })
      .when('/faq', {
          templateUrl: 'partials/faq.html',
        })
      .when('/boutique', {
          templateUrl: 'partials/boutique.html',
        })
      .otherwise({
        redirectTo:'/water-tracker'
      });
    // localStorage Config
    localStorageServiceProvider
      .setPrefix('guly')
      .setNotify(true, true);
  }
]);

/*  DEPENDENCIES
===================================================================*/

var hintsListControllers  = angular.module('hintsListControllers', []);
var formControllers       = angular.module('formControllers', []);
var switchControllers     = angular.module('switchControllers', []);
var mainNavModule         = angular.module('mainNavModule', []);
var gooeyMenuModule       = angular.module('gooeyMenuModule', []);

/*  DIRECTIVES (will be externalized in directives.js in a further version)
===================================================================*/

gooeyMenuModule
  .directive('gulGooeyMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/gooey-menu.html',
      controller: 'gooeyMenuController',
      controllerAs: 'gooey'
    };
  });

mainNavModule
  .directive('gulMainNavModule', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/main-nav.html',
      controller: 'mainNavController'
    };
  });

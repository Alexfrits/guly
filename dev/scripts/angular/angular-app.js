var gulyApp = angular.module('gulyApp', [
  'ngRoute',
  'ngAnimate',
  'mainNavModule',
  'waterMeterModule',
  'pagesViewControllers',
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
        controller:'WaterTrackerCtrl'
      })
      .when('/profil', {
          templateUrl: 'partials/profil.html',
          controller:'ProfileCtrl'
        })
      .when('/statistiques', {
          templateUrl: 'partials/statistiques.html',
          controller:'StatsCtrl'
        })
      .when('/astuces', {
        templateUrl: 'partials/astuces.html',
        controller:'HintsCtrl'
      })
      .when('/faq', {
          templateUrl: 'partials/faq.html',
          controller:'FaqCtrl'
        })
      .when('/boutique', {
          templateUrl: 'partials/boutique.html',
          controller:'ShopCtrl'
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

var pagesViewControllers  = angular.module('pagesViewControllers', []);
var formControllers       = angular.module('formControllers', []);
var switchControllers     = angular.module('switchControllers', []);
var mainNavModule         = angular.module('mainNavModule', []);
var waterMeterModule      = angular.module('waterMeterModule', ['gooeyMenuModule']);
var gooeyMenuModule       = angular.module('gooeyMenuModule', []);

/*  DIRECTIVES (will be externalized in directives.js in a further version)
===================================================================*/

waterMeterModule
  .directive('gulWaterMeter', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/water-meter.html',
      controller: 'waterMeterController'
    };
  });

gooeyMenuModule
  .directive('gulGooeyMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/gooey-menu.html',
      controller: 'gooeyMenuController'
    };
  });

mainNavModule
  .directive('gulMainNavModule', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/main-nav.html',
    };
  });

var gulyApp = angular.module('gulyApp', [
  'LocalStorageModule',
  'ngRoute',
  'ngAnimate',
  'mainNavModule',
  'waterMeterModule',
  'pagesViewControllers',
  'formControllers',
  'switchControllers',
  'gulyFilters'
]);

gulyApp.config(['$routeProvider',

  // Navigation Routes
  function($routeProvider) {
    $routeProvider
      .when('/water-tracker', {
        templateUrl: 'partials/water-tracker.html',
        controller:'WaterTrackerCtrl'
      })
      .when('/profil', {
          templateUrl: 'partials/profil.html',
          controller:'ProfileCtrl'
        })
      .when('/water-need', {
          templateUrl: 'partials/water-need.html',
          controller:'wnCtrl'
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

  }
]);
// localStorage Config
gulyApp.config(['localStorageServiceProvider',
  function(localStorageServiceProvider) {

    localStorageServiceProvider
      .setPrefix('guly')
      .setNotify(true, true)
      .setStorageCookie(360, '/')
      .setStorageCookieDomain('http://www.guly.cepegra.be')
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

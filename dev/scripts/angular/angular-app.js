var gulyApp = window.angular.module('gulyApp', [
  'LocalStorageModule',
  'ngRoute',
  'ngAnimate',
  'mainNavModule',
  'waterMeterModule',
  'pagesViewControllers',
  'formControllers',
  'switchControllers',
  'gulyFiltersModule',
  'slick',
  'weatherControllers', 
  'weatherServices'
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
        controller:'AstucesCtrl'
      })
      .when('/faq', {
          templateUrl: 'partials/faq.html',
          controller:'FaqCtrl'
        })
      .when('/boutique', {
          templateUrl: 'partials/boutique.html',
          controller:'ShopCtrl'
        })
      .when('/weather-test', {
          templateUrl: 'partials/weather-test.html',
          controller:'WeatherCtrl'
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
      .setStorageType('localStorage')
      .setNotify(true, true)
      // .setStorageCookie(360, '/')
      // .setStorageCookieDomain('http://www.guly.cepegra.be')
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
var gulyFiltersModule     = angular.module('gulyFiltersModule', []);
var wavesModule           = angular.module('waves', []);
var weatherControllers    = angular.module("weatherControllers", []);
var weatherServices       = angular.module('weatherServices', []);

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

weatherControllers
  .directive('gulWeather', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/weather.html',
      controller: 'GetWeatherCtrl'
    };
  });

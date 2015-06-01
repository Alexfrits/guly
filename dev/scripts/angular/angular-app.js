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
  // 'slick',
  'weatherControllers',
  'weatherServices',
  'tc.chartjs',
]);

/*  DEPENDENCIES
===================================================================*/

var pagesViewControllers  = angular.module('pagesViewControllers', []);
var formControllers       = angular.module('formControllers', []);
var mainNavModule         = angular.module('mainNavModule', []);
var waterMeterModule      = angular.module('waterMeterModule', ['gooeyMenuModule']);
var gooeyMenuModule       = angular.module('gooeyMenuModule', []);
var gulyFiltersModule     = angular.module('gulyFiltersModule', []);
var weatherControllers    = angular.module('weatherControllers', []);
var weatherServices       = angular.module('weatherServices', []);


gulyApp
  .config(['$routeProvider',
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
  ])
  // localStorage Config
  .config(['localStorageServiceProvider',
    function(localStorageServiceProvider) {

      localStorageServiceProvider
        .setPrefix('guly')
        .setStorageType('localStorage')
        .setNotify(true, true);
      // .setStorageCookie(360, '/')
      // .setStorageCookieDomain('http://www.guly.cepegra.be')
    }
  ])
  .run(['$location', 'localStorageService',
    function($location, localStorageService) {
      var logged = localStorageService.get('logged');
      if (!logged) {
        $location.url('/profil');
      }
    }
  ])
;

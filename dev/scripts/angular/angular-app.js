var gulyApp = angular.module('gulyApp', [
  'ngRoute',
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
        // controller: 'HintsListCtrl'
      })
    .when('/profil', {
        templateUrl: 'partials/profil.html',
        controller: 'HintsListCtrl'
      })
    .when('/statistiques', {
        templateUrl: 'partials/statistiques.html',
        controller: 'HintsListCtrl'
      })
    .when('/astuces', {
        templateUrl: 'partials/astuces.html',
        controller: 'HintsListCtrl'
      })
      .when('/astuces/:astuceId', {
        templateUrl: 'partials/astuce-detail.html',
        controller: 'HintDetailCtrl'
      })
    .when('/faq', {
        templateUrl: 'partials/faq.html',
        controller: 'HintsListCtrl'
      })
    .when('/boutique', {
        templateUrl: 'partials/boutique.html',
        controller: 'HintsListCtrl'
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

/*  DIRECTIVES (will be externalized in directives.js in a further version)
===================================================================*/

gulyApp
  // Menu to add a drink
  .directive('gulGooeyMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/gooey-menu.html',

      link: function() {
        // à ANGULARISER
        var $openButton = $('.gooey .gooey__open-button');

        $openButton.on('click', function(e) {
          e.preventDefault();
          $(this).toggleClass('active');
        });
      }
    };
  }).directive('gulMainNav', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/main-nav.html',

      link: function() {

      }
    };
  });

// // LocalStorage Config
// gulyApp.config(function(localStorageServiceProvider) {
//   localStorageServiceProvider
//     .setPrefix('guly')
//     .setNotify(true, true);
// });


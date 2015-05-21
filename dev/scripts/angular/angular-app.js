var gulyApp = angular.module('gulyApp', [
  'ngRoute',
  'hintsListControllers',
  'formControllers',
  'gulyFilters'
]);

gulyApp.config(['$routeProvider',

  function($routeProvider) {
    $routeProvider
    .when('/astuces', {
        templateUrl: 'partials/astuces.html',
        controller: 'HintsListCtrl'
      })
    .when('/profil', {
        templateUrl: 'partials/profil.html',
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


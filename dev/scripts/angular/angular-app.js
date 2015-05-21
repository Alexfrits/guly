var gulyApp = angular.module('gulyApp', [
  'ngRoute',
  'mainNavModule',
  'gooeyMenuModule',
  'hintsListControllers',
  'formControllers',
  'gulyFilters',
  'switchControllers'
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

      link: function() {
        var $openButton = $('.gooey .gooey__open-button');

        $openButton.on('click', function(e) {
          e.preventDefault();
          $(this).toggleClass('active');
        });
      }
    };
  });

mainNavModule
  .directive('gulMainNavModule', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/main-nav.html',

      link: function() {

      }
    };
  });


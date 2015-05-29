/*  DIRECTIVES
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
      templateUrl: 'widgets/gooey-menu.html'
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

formControllers
  .directive('profilForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/profil-form.html',
      controller: 'profilformCtrl',
      controllerAs: 'profilform'
    };
  });

gulyApp
  .directive('slider', function($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        astuces: '='
      },
      controller: 'astucesCtrl',
      controllerAs: 'astuces',
      link: function(scope, elem, attrs, http) {

        console.log(scope.astuces);
        // Initially the index is at the first astuce
        scope.currentIndex = 0;
        scope.next = function() {
          scope.currentIndex < scope.astuces.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };

        scope.prev = function() {
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.astuces.length - 1;
        };

        // watch les changements d'index
        scope.$watch('currentIndex', function() {
          scope.astuces.forEach(function(astuce) {

            // make every astuce invisible
            astuce.visible = false;
          });

          // make the current astuce visible
          scope.astuces[scope.currentIndex].visible = true;
        });
      },
      templateUrl: 'widgets/astuces.html'
    }
  });

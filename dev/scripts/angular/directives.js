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

formControllers
  .directive('profilForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/profil-form.html',
      controller: 'profilformCtrl',
      controllerAs: 'profilform'
    };
  });

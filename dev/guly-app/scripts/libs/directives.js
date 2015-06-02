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
  // // adds 'changed' class when value changes
  // .directive('animateOnChange', function($timeout) {
  //   return function(scope, element, attr) {
  //     scope.$watch(attr.animateOnChange, function(nv, ov) {
  //       if (nv != ov) {
  //         element.addClass('animated');
  //         $timeout(function() {
  //           element.removeClass('animated');
  //         }, 1000); // Could be enhanced to take duration as a parameter
  //       }
  //     });
  //   };
  // });

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

gulyApp.directive('slickSlider', function() {
  return {
    restrict: 'A',
    scope: {'data': '='},
    link: function(scope, element, attrs) {
      var isInitialized = false;
      scope.$watch('data', function(newVal, oldVal) {
        if (newVal.length > 0 && !isInitialized) {
          $(element).slick(scope.$eval(attrs.slickSlider));
          isInitialized = true;
        }
      });
    }
  }
});

sharingModule
  .directive('sharingButtons', function() {
    return {
      restrict: 'E',
      templateUrl: 'widgets/sharing-buttons.html',
    };
  });

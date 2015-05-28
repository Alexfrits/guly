// waterMeterModule
//   .factory('deviceOrientationService', ['$element', '$window',
//     function($element, $window) {

//       function handleOrientation(event) {
//         var x = event.beta;  // In degree in the range [-180,180]
//         var y = event.gamma; // In degree in the range [-90,90]
//         console.log(event);

//         // // Because we don't want to have the device upside down
//         // // We constrain the x value to the range [-90,90]
//         // if (x >  90) { x =  90};
//         // if (x < -90) { x = -90};

//         // To make computation easier we shift the range of
//         // x and y to [0,180]
//         x += 90;
//         y += 90;

//       }

//       $window.addEventListener('deviceorientation', handleOrientation);
//     }
//   ])
// ;

//WindowEventsService
gulyApp
  .service('deviceOrentationListener', ['$window',
    function($window) {
      var orientation  = {};

      function getDeviceOrientation () {
        $window.addEventListener('deviceorientation', function(e) {

          function tiltLR (e) {
            orientation.lr = e.gamma;
            return orientation.lr;
          }

          function tiltFB (e) {
            // beta is the front-to-back tilt in degrees, where front is positive
            orientation.fb = e.beta;
            return orientation.fb;
          }

          function direction (e) {
            // alpha is the compass direction the device is facing in degrees
            orientation.dir = e.alpha;
            return orientation.dir;
          }

          return orientation;
        });
          return orientation;

        console.log(orientation);
      }
          return orientation;
    }
  ]);

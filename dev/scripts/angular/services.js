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

// //WindowEventsService
gulyApp
  .service('deviceOrentationListener', ['$window',
    function($window) {
        // var windowEvent = {};
        // this.test = 'test value';
        // this.test2 = 'testval 2';
  
        // function testFun(input) {
        //   input = input + ' added';
        //   return input;
        // }
  
        // this.test = testFun(this.test);


        // $window.addEventListener('deviceorientation', function(e) {
        //   return function(e) {
        //     windowEvent = e;
        //   }
        // });
        // console.log(windowEvent);

  
        // // this.tiltLR = function(e) {
        // //   orientation.lr = e.gamma;
        // //   return orientation.lr;
        // // }
        // return this;
    }]);

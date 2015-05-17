(function($) {

  if ($('main').hasClass('page-orientation')) {

    if (window.DeviceOrientationEvent) {
      document.getElementById('doEvent').innerHTML = 'DeviceOrientation';
      // Listen for the deviceorientation event and handle the raw data
      window.addEventListener('deviceorientation', function(eventData) {
        // gamma is the left-to-right tilt in degrees, where right is positive
        var tiltLR = eventData.gamma;

        // beta is the front-to-back tilt in degrees, where front is positive
        var tiltFB = eventData.beta;

        // alpha is the compass direction the device is facing in degrees
        var dir = eventData.alpha;

        // call our orientation event handler
        // deviceOrientationHandler(tiltLR, tiltFB, dir);
        document.getElementById('doTiltLR').innerHTML = Math.round(tiltLR);
        document.getElementById('doTiltFB').innerHTML = Math.round(tiltFB);
        document.getElementById('doDirection').innerHTML = Math.round(dir);

        // Apply the transform to the image
        var movingImg = document.getElementById('moving-block');
        movingImg.style.transform =
          'rotate(' + (tiltLR * -1) + 'deg) rotate3d(1,0,0, ' + (tiltFB * -1) + 'deg)';
      });

    } else {
      document.getElementById('doEvent').innerHTML = 'Not supported.';
    }
  }
})(jQuery);

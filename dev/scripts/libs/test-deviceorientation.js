(function($) {

  window.addEventListener('deviceorientation', handleOrientation, true);

  function handleOrientation(event) {
      var x = event.beta;  // En degré sur l'interval [-180,180].
      var  y = event.gamma; // En degré sur l'interval [-90,90].

      resultat.innerHTML  = 'beta : ' + x + '<br />';
      resultat.innerHTML += 'gamma: ' + y + '<br />';

      // Parce-que l'on ne veut pas avoir l'appareil à l'envers.
      // On restreint les valeurs de x à l'intervalle [-90,90].
      if (x >  90) { x =  90; }
      if (x < -90) { x = -90; }
      // Pour rendre le calcul plus simple.
      // On délimite l'intervalle de x et y sur [0, 180].
      x += 90;
      y += 90;

      // 10 est la moitié de la taille de la balle.
      // Cela centre le point de positionnement au centre de la balle.

      balle.style.top  = (maxX * x / 180 - 10) + 'px';
      balle.style.left = (maxY * y / 180 - 10) + 'px';
    }

  if ($('main').hasClass('page-orientation')) {
    var jardin = document.querySelector('.jardin');
    var balle = document.querySelector('.balle');
    var resultat = document.querySelector('.resultat');
    var maxX = jardin.clientWidth  - balle.clientWidth;
    var maxY = jardin.clientHeight - balle.clientHeight;

    window.addEventListener('deviceorientation', handleOrientation);
  }
})(jQuery);

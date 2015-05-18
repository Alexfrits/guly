(function($) {

  if ($('main').hasClass('main_profil')) {

    //  variables
    var light_off = '';
    var resultSec = '';
    var nickname = '';
    var poids = '';
    var BH = '';
    var guly  = {};

    // S'IL EXISTE UN ITEM DANS LE LOCALSTORAGE
    // Récupéré le dernier item du localStorage
    // if(typeof localStorage != 'undefined') {
    // 	if(guly in localStorage) {
    //  		window.location.href("index.php");
    // 	}
    // } else {
    //  	window.location.href("profil.php");
    // }

    // SUBMIT ON CLICK
    $('#submit_objectif').on('click', function(e) {
    //  variables
    var light_off = $('.lightbox_objectif_off');
    var resultSec = $('.result_section');
    var nickname = $('#nickname').val();
    var poids = parseInt($('#poids').val());
    var BH = ((0.038 * 1) * (poids));
    var guly  = {
      'nickname' : nickname,
      'poids' : poids,
      'BH' : BH
    };
    // LOCALSTORAGE
    // stocker les valeurs du form
    localStorage.setItem('guly', JSON.stringify(guly));

    // récupéré les données
    function User_data() {
      recup = localStorage.getItem('guly');
      if (typeof(recup) != 'object') {
        recup = JSON.parse(recup);
        $('.result_nickname').html(recup.nickname);
        $('.BH').html(recup.BH.toFixed(2) + ' L');
      }
    }
    User_data();

    // LIGHTBOX RESULT
    // afficher la lightbox
    $(light_off).fadeIn('slow', function() {
      $(this).removeClass('lightbox_objectif_off');
      $(this).addClass('lightbox_objectif_on');

      // fermer la lightbox
      $('.return_btn').on('click', function(e) {
        $(light_off).fadeOut('slow', function() {
          $(this).addClass('lightbox_objectif_off');

          e.preventDefault();
        });
      });

      // Valider la lightbox
      $('.start_notif').on('click', function(e) {
        $(light_off).fadeOut('slow', function() {
          $(this).addClass('lightbox_objectif_off');

          e.preventDefault();
        });
      });
    });

    e.preventDefault();
  }); // fin de la function on.click
  }
}(jQuery));

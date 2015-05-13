(function ($) {
	// Détection du support
	// if(typeof localStorage!='undefined') {
	//   if('nickname' in localStorage) {
	//     alert("nickname récupéré");
	//     $('#nickname').value = localStorage.getItem('nickname');
	//   }
	// } else {
	//   alert("localStorage n'est pas supporté");
	// }

	//  variables
	var light_off = '';
	var nickname = '';
	var poids = '';
	var result = '';
	var guly  = {};

	// SUBMIT ON CLICK
	$('#submit_objectif').on('click', function (e) {
	//  variables
	var light_off = $('.lightbox_objectif_off');
	var nickname = $('#nickname').val();
	var poids = $('#poids').val();
	var result = "algorithme";
	var guly  = {
	  "nickname" : nickname,
	  "poids" : poids
	};
		// LOCALSTORAGE
		// stocker les valeurs du form
		localStorage.setItem("guly", JSON.stringify(guly));

		// récupéré les données
		function User_data(){
		   recup = localStorage.getItem("guly");
		   if(typeof(recup) != 'object'); {
		   		recup = JSON.parse(recup);
		    	//alert("Salutation " + recup.nickname + " " + recup.poids);
		   }
		}
		User_data();
			console.log(nickname, poids, guly);


		// LIGHTBOX RESULT
		// afficher la lightbox
		$(light_off).fadeIn( "slow", function() {
			$(this).removeClass('lightbox_objectif_off');
    		$(this).addClass('lightbox_objectif_on');

    		// fermer la lightbox
			$('.close_btn').on('click', function (e) {
				$(light_off).fadeOut( "slow", function() {
					$(this).addClass('lightbox_objectif_off');

					e.preventDefault();
				});
			});

 		 });

		e.preventDefault();
    }); // fin de la function on.click

}(jQuery));
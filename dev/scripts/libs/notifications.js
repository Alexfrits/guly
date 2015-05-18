(function($) {
  $('#smart_cap').on('click', function(e) {
    var message = 'La connexion avec le Guly SmartCap est établie';

    	$(this).setTimeout(function() {
      		$('#push_connexion').style.display = 'block';
    	}, 5000);
    e.preventDefault();
  });

  // if ('.start_notif'.onclick != null) {
  //   var message = '' + recup.nickname + ''
  // } else {
  //   //onclick doesn't exist
  // }

}(jQuery));

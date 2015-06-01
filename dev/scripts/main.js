(function ($) {
	
	$('body').on('click', function(e) {
			e.preventDefault;
	  // variables
	  var x = e.pageX + 'px';
	  var y = e.pageY + 'px';
	  
	  // styler le .dot
	  $('.dot').css({
	    'position': 'absolute',
	    'top': y,
	    'left': x
	  });
	  
	  // ajouter un span class
	  $(this).append("<span class='dot'></span>");
	  $('.dot').addClass('waves');
	  setTimeout(function() {
	    $('.dot').remove();
	  }, 3000);
	});

}(jQuery));
    
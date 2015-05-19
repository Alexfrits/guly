(function($) {

  var $icon = $('#menu_waves');
  var $aside = $('#aside_nav');

  $icon.on('click', function(e) {
    $aside.toggleClass('close');

    e.preventDefault;
  });

}(jQuery));

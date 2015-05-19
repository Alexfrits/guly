(function($) {

  var $icon = $('#menu_waves');
  var $panel = $('#aside_nav');
  var $menuItems = $panel.find('li a');

  $icon.on('click', function(e) {
    e.preventDefault();
    $panel.toggleClass('close');
  });

  $menuItems.on('click', function(e) {
    $panel.addClass('close');
  });

}(jQuery));

$(document).foundation({
  offcanvas : {
    open_method: 'overlap'
  }
});

(function($) {
  $('input, select, action_btn, a').on('focus', function(e) {
    $(this).addClass('waves');
    e.preventDefault;
  });

  $('input, select, action_btn, a').on('focusout', function(e) {
    $(this).removeClass('waves');
    e.preventDefault;
  });
}(jQuery));


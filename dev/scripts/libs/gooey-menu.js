(function($) {

  /*
  *
  * CODE À INTÉGRER DIRECTEMENT DANS ANGULAR
  *
  */

// if ($('main').hasClass('page-tracker')) {


  var $openButton = $('.gooey .gooey__open-button');


  /*  Blocage du menu contextuel
  ===================================================================*/


  /* V1 */

  // $(document).ready(function() {
  //   NoClick();
  //   NoTouch();
  //   init();
  // });

  // function NoClick() {
  //   //turns off right clicking of mouse on desktops for any img with class named protected
  //   $openButton.on('contextmenu', function(e) {
  //     return false;
  //   });
  // }
  // function NoTouch() { // turns off touch events for mobile browsers
  //   $openButton.on('touchmove', false);
  //   // mozilla (firefox) specific
  //   $openButton.on('MozTouchMove', function(e) {
  //     e.preventDefault();
  //   });
  // }
  // //android specific to turn off context menu on long touch events
  // function absorbEvent_(event) {
  //   var e = event || window.event;
  //   e.preventDefault && e.preventDefault();
  //   e.stopPropagation && e.stopPropagation();
  //   e.cancelBubble = true;
  //   e.returnValue = false;
  //   return false;
  // }

  // function preventLongPressMenu(node) {
  //   node.ontouchstart = absorbEvent_;
  //   node.ontouchmove = absorbEvent_;
  //   node.ontouchend = absorbEvent_;
  //   node.ontouchcancel = absorbEvent_;
  // }
  // function init() {
  //   preventLongPressMenu($openButton);
  // }

  $openButton.on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    console.log('data');
  });
// }
}(jQuery));

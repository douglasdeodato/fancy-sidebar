(function($) {
  var menu = $('menu');
  $('.menu-toggle').bind('click', function() {
    $('.menu').toggleClass('menu-open');
    return false;
  });
})(jQuery);

$(function slickSlider() {
  if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $('.slider').slick({
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<img src="images/arrow-right.png" class="slide-prearrow">',
    nextArrow: '<img src="images/arrow-left.png" class="slide-nextarrow">'
    });
  }
});

$(function hamburgerMenu() {
  $('.hamburger-button').click(function(){
      $('.nav-wrap').toggleClass('is-open');
      $('.body-wrap').toggleClass('is-overlay');
  });

  $('.nav-wrap').click(function(){
      $('.nav-wrap').removeClass('is-open');
      $('.body-wrap').removeClass('is-overlay');
  })
});


$(function stickyHeader() {
  $('.header').each(function () {
    var $window = $(window), 
    $header = $(this), 
    headerOffsetTop = $header.offset().top;

    $window.on('scroll', function () {
      if ($window.scrollTop() > headerOffsetTop) {
          $header.addClass('sticky');
          } else {
          $header.removeClass('sticky');
         }
    });
  });
});
$('.quotation_block').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false,
	dots: true,
	pauseOnHover: false
});

//Load More
$(function () {
    $(".portfolio_block").slice(0, 8).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".portfolio_block:hidden").slice(0, 4).slideDown();
        if ($(".portfolio_block:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

//scroll
$('a[href^="#"], button[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

//Button-scrollup
$(document).ready(function(){
  $('body').append('<a href="#" class="scrollup">Up</a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $(".scrollup").scrollToTop();
});


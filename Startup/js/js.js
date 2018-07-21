$('.about_team').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: true,
	pauseOnHover: false,
	prevArrow: '<i class="icon-left-open arrow-prev"></i>',
  nextArrow: '<i class="icon-right-open arrow-next"></i>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.brands_block').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	arrows: false,
	pauseOnHover: false,
});
$(document).ready(function(){
			var touch = $('.nav_btn');
			var menu = $('.top-nav-menu');

			$(touch).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});
			$(window).resize(function(){
				var wid = $(window).width();
				if(wid > 480 && menu.is(':hidden')) {
					menu.removeAttr('style');
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
  $('body').append('<a href="#" class="scrollup"><i class="icon-up-open"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "750") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "750") $(scrollDiv).fadeOut("slow")
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

//mixitup
var mixer = mixitup('.works_portfolio');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    },
    load: {
        filter: 'all'
    }
});


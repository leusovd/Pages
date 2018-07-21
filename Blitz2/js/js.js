$('.sl').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	arrows: false,
	dots: true,
	pauseOnHover: false
});
$(document).ready(function(){
			var touch = $('.touch-menu');
			var menu = $('.header__nav__menu');

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

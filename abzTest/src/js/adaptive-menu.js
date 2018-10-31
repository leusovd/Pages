const header = document.querySelector('.header');
const sandwichBtn = document.querySelector('.sandwich-menu-icon');
const adaptiveMenu = document.querySelector('.adaptive-menu');
const adaptiveMenuNav = adaptiveMenu.querySelector(".adaptive-menu__navigation");

sandwichBtn.addEventListener("click", () => {
	adaptiveMenu.classList.add('active');
	document.body.classList.add('no-scroll');
});
adaptiveMenu.addEventListener("click", (e) => {
	if (!e.target.closest(".adaptive-menu__navigation")) {
		adaptiveMenu.classList.remove("active");
		document.body.classList.remove("no-scroll");
	}
});

window.addEventListener('scroll', function() {
	if (document.documentElement.scrollTop > 0) {
    header.classList.add("fixed");
  } else {
		header.classList.remove('fixed');
	}
});
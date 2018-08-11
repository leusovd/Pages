//adaptive-menu
var menuBtn = document.querySelector(".hdr__nav-menu");
menuBtn.addEventListener("click", function() {
  var headerMenu = document.querySelector(".hdr__nav");
  headerMenu.classList.toggle("hdr__nav--active");
});
//portfolio-filtering
var btnsContainer = document.querySelector(".portfolio__btns-container");
var btnMore = document.querySelector(".portfolio__loadmore-button");
btnsContainer.addEventListener("click", signActive);
btnMore.addEventListener("click", function() {
  var blockAdditional = document.querySelectorAll(".additional");
  for (var i = 0; i < 3; i++) {
    blockAdditional[i].classList.remove("additional");
  }
});
filterSelection("all");
function signActive(event) {
  var targ, current;
  targ = event.target;
  event.preventDefault();
  if (targ.tagName != "A") {
    return;
  } else {
    current = btnsContainer.querySelector(".active");
    current.classList.remove("active");
    targ.classList.add("active");
    targ.addEventListener("click", filterSelection(targ.id));
  }
}

function filterSelection(category) {
  var block = document.querySelectorAll(".portfolio__grid__block");
  if (category == "all") {
    for (var i = 0; i < block.length; i++) {
      block[i].classList.add("show");
    }
  } else {
    for (var i = 0; i < block.length; i++) {
      block[i].classList.remove("show");
      if (block[i].classList.contains(category)) block[i].classList.add("show");
    }
  }
}

//video
var videoOverlay = document.querySelector(".video__overlay");
var video = document.getElementById("video1");
video.addEventListener("mousemove", showContent);
function vidplay() {
  if (video.paused) {
    hideContent();
    video.play();
  } else {
    video.pause();
  }
}

function hideContent() {
  videoOverlay.style.display = "none";
}
function showContent() {
  videoOverlay.style.display = "flex";
  window.setTimeout(hideContent, 3000);
}

//carousel
var carousel = document.getElementById("carousel");
var slidesContainer = carousel.querySelector(".blog__carousel__container");
var slides = carousel.querySelectorAll(".blog__carousel__block");
var slide = carousel.querySelector(".blog__carousel__block");
var arrows = carousel.querySelector(".blog__carousel__arrows");
var prev = carousel.querySelector(".blog__carousel__prev");
var next = carousel.querySelector(".blog__carousel__next");
var count = 1;
var position = 0;

arrows.addEventListener("click", slider);

function slider(event) {
	var btn = event.target.closest("div");
  var html = document.querySelector("html");
  var style = window.getComputedStyle(html);
  var coefficient = parseInt(style.fontSize);
  var width = slide.scrollWidth / coefficient;
  var container = document.querySelector(".container");
  var basis = Math.floor(container.scrollWidth / slide.scrollWidth);
  if (btn.classList.contains("blog__carousel__prev")) {
    position = Math.min(position + width * count, 0);
  } else if (btn.classList.contains("blog__carousel__next")) {
    position = Math.max(position - width * count, -width * (slides.length - basis));
  }
  slidesContainer.style.transform = "translateX(" + position + "rem)";
}

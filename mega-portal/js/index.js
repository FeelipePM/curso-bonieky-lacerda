var slideItem = 0;
window.onload = function() {
  setInterval(slidePass, 4000);

  var slidewidth = document.getElementById("slideshow").offsetWidth;
  var objs = document.getElementsByClassName("slide");
  for (var i = 0; i < objs.length; i++) {
    objs[i].style.width = slidewidth + "px";
  }
};
function slidePass() {
  var slidewidth = document.getElementById("slideshow").offsetWidth;

  if (slideItem >= 3) {
    slideItem = 0;
  } else {
    slideItem++;
  }

  document.getElementsByClassName("slideshowarea")[0].style.marginLeft =
    "-" + slidewidth * slideItem + "px";
}
function slideChange(pos) {
  slideItem = pos;
  var slidewidth = document.getElementById("slideshow").offsetWidth;
  document.getElementsByClassName("slideshowarea")[0].style.marginLeft =
    "-" + slidewidth * slideItem + "px";
}

function toggleMenu() {
  const menu = document.getElementById("menu");

  menu.style.display == "none" || menu.style.display == ""
    ? (menu.style.display = "block")
    : (menu.style.display = "none");
}

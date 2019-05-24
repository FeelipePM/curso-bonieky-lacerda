function menuMobile() {
  const menuNavUl = document.querySelector(".menu-nav ul");

  document.querySelector(".mobile-menu").addEventListener("click", function() {
    menuNavUl.style.display == "flex"
      ? (menuNavUl.style.display = "none")
      : (menuNavUl.style.display = "flex");
  });
}

menuMobile();

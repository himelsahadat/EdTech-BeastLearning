let menu = document.querySelector(".header__icon");
let active = document.querySelector(".header-active");

menu.addEventListener("click", function () {
  active.classList.toggle("header-active__menu--bar");
});

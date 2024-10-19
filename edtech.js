let menu = document.querySelector(".header__icon");
let active = document.querySelector(".header__menu--bar");

menu.addEventListener("click", function () {
  active.classList.toggle("header__menu--bar-ti");
});


// Hamburger Manu
// Hamburger Manu

let menu = document.querySelector(".header__icon");
let active = document.querySelector(".header-active");

menu.addEventListener("click", function () {
  active.classList.toggle("header-active__menu--bar");
});

// About Section Day Name 
// About Section Day Name 

const textDay = document.querySelector(".about__card-2-day");
let currentDayName;
function getDayName() {
  const currentDayValue = new Date().getDay();

  switch (currentDayValue) {
    case 0:
      currentDayName = "Sunday";
      break;
    case 1:
      currentDayName = "Monday";
      break;
    case 2:
      currentDayName = "Tuesday";
      break;
    case 3:
      currentDayName = "Wednesday";
      break;
    case 4:
      currentDayName = "Thursday";
      break;
    case 5:
      currentDayName = "Friday";
      break;
    case 6:
      currentDayName = "Saterday";
      break;
  }
  return currentDayName;
}
textDay.innerHTML = getDayName();

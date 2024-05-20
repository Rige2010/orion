// Swiper
const btns = document.querySelectorAll(".materials__slider-button");
const leftBtn = btns[0];
const rightBtn = btns[1];

const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1140: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
//
leftBtn.addEventListener("click", () => swiper.slidePrev());
rightBtn.addEventListener("click", () => swiper.slideNext());

// Burger Menu
const body = document.querySelector("body");
const burgerButton = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__navigation");
burgerButton.addEventListener("click", burgerToggle);
const navLink = document.querySelectorAll(".header__nav-link");

navLink.forEach((element) => {
  element.addEventListener("click", () => {
    body.classList.remove("freeze");
    burgerMenu.classList.remove("header__navigation_open");
    burgerButton.classList.remove("header__burger_open");
    burgerButton.classList.add("header__burger_closed");
  });
});

function burgerToggle() {
  if (burgerButton.classList.contains("header__burger_closed")) {
    burgerButton.classList.remove("header__burger_closed");
    burgerButton.classList.add("header__burger_open");
    burgerMenu.classList.add("header__navigation_open");
    body.classList.add("freeze");
  } else if (burgerButton.classList.contains("header__burger_open")) {
    burgerButton.classList.remove("header__burger_open");
    burgerButton.classList.add("header__burger_closed");
    burgerMenu.classList.remove("header__navigation_open");
    body.classList.remove("freeze");
  } else {
    burgerButton.classList.add("header__burger_open");
    burgerMenu.classList.add("header__navigation_open");
    body.classList.add("freeze");
  }
}

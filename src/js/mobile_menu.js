let navMenu = document.querySelector(".nav__menu");
let navBurger = document.querySelector(".nav__burger");

navBurger.addEventListener("click", () => {
  navMenu.classList.toggle("invisible");
  navBurger.classList.toggle("nav__burger_active");
})

let btnRight = document.querySelector(".right");
let btnLeft = document.querySelector(".left");
let slider = document.querySelector(".sec-testi__slider");

btnRight.addEventListener("click", () => {
  let cards = document.querySelectorAll(".card-testi");
  let dis = cards[4].clientWidth + 34;
  cards[3].classList.remove("card-testi_centered");
  cards[4].classList.add("card-testi_centered");
  slider.style.transition = "all 0.3s";
  slider.style.transform = `translateX(-${dis}px)`;

  setTimeout(removeTransition, 305);

  setTimeout(arrayChangeRight, 310);

  function removeTransition() {
    slider.style.transition = "all 0s";
  }

  function arrayChangeRight() {
    slider.style.transform = `translateX(-0px)`;
    let elem = document.createElement("div");
    elem.innerHTML = cards[0].innerHTML;
    elem.classList.add("card-testi");
    slider.appendChild(elem);
    slider.removeChild(cards[0]);
  }
})

btnLeft.addEventListener("click", () => {
  let cards = document.querySelectorAll(".card-testi");
  let dis = cards[2].clientWidth + 34;
  cards[3].classList.remove("card-testi_centered");
  cards[2].classList.add("card-testi_centered");
  slider.style.transition = "all 0.3s";
  slider.style.transform = `translateX(${dis}px)`;

  setTimeout(removeTransition, 305);

  setTimeout(arrayChangeLeft, 310);

  function removeTransition() {
    slider.style.transition = "all 0s";
  }

  function arrayChangeLeft() {
    slider.style.transform = `translateX(0px)`;
    let elem2 = document.createElement("div");
    elem2.innerHTML = cards[6].innerHTML;
    elem2.classList.add("card-testi");
    slider.insertBefore(elem2, slider.firstChild );
    slider.removeChild(cards[6]);
  }
})
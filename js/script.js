const menu = document.querySelector(".menu");
const navigation = document.querySelector("header");

let isMenu = false;

menu.addEventListener("click", () => {
  navigation.classList.toggle("active");
  document.body.classList.toggle("lock");
  isMenu = !isMenu;
});

const anim = document.querySelectorAll(".right-element li");
const accordion = document.querySelectorAll(".right-element li p");
const svg = document.querySelectorAll(".right-element li .svg");
const leftElementH4 = document.querySelector(".left-element h4");
const leftElementP = document.querySelector(".left-element p");

let number = 0;

//accordion

for (let i = 0; i < anim.length; i++) {
  accordion[0].style.maxHeight = accordion[0].scrollHeight + "px";
  anim[i].addEventListener("click", () => {
    accordion[i].style.maxHeight = accordion[i].scrollHeight + "px";
    console.log(number, i);
    if (number !== i && anim[number].classList.contains("accordion-active")) {
      accordion[number].style.maxHeight = "0";
      anim[number].classList.remove("accordion-active");
    } else if (
      number === i &&
      !anim[number].classList.contains("accordion-active")
    ) {
      anim[i].classList.add("accordion-active");
    } else if (
      number === i &&
      anim[number].classList.contains("accordion-active")
    ) {
      accordion[number].style.maxHeight = "0";
      anim[i].classList.remove("accordion-active");
    }

    if (i !== number) anim[i].classList.add("accordion-active");

    number = i;
    leftElementH4.innerHTML = data[i].title;
    leftElementP.innerHTML = data[i].text;
  });
}

const data = [
  {
    text: " Каучуковая формула, эластичность которой, в отличие от других баз,даёт долгий срок носки без сколов и трещин – от 3-4 недель иболее.",
    title: "Как долго держится база?",
  },
  {
    text: " Каучуковая формула, эластичность которой, в отличие от других баз,даёт долгий срок носки без сколов и трещин – от 3-4 недель иболее.",
    title: "Для какого типа ногтей подходит?",
  },
  {
    text: " Каучуковая формула, эластичность которой, в отличие от других баз,даёт долгий срок носки без сколов и трещин – от 3-4 недель иболее.",
    title: "Требуется ли наносить подложку? ",
  },
  {
    text: " Каучуковая формула, эластичность которой, в отличие от других баз,даёт долгий срок носки без сколов и трещин – от 3-4 недель иболее.",
    title: "Как долго держится база?",
  },
  {
    text: " Каучуковая формула, эластичность которой, в отличие от других баз,даёт долгий срок носки без сколов и трещин – от 3-4 недель иболее.",
    title: "Требуется ли наносить подложку? ",
  },
  {
    text: " Каучуковая формула, эластичность которой, в отличие от других баз,даёт долгий срок носки без сколов и трещин – от 3-4 недель иболее.",
    title: "Как долго держится база?",
  },
];

//slider

const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".slider-item");

currentItem = 0;
currentWidth = 0;

next.addEventListener("click", () => {
  let width = items[0].getBoundingClientRect().width + 40;
  if (currentItem !== items.length - 1) {
    items[currentItem].style.transform = `translateX(${
      currentWidth - width
    }px)`;
    for (let i = currentItem + 1; i < items.length; i++) {
      items[i].style.transform = `translateX(${currentWidth - width}px)`;
    }
    currentWidth -= width;
    currentItem++;
  }
});

prev.addEventListener("click", () => {
  const width = items[0].getBoundingClientRect().width + 40;
  if (currentItem !== 0) {
    items[currentItem].style.transform = `translateX(${
      currentWidth + width
    }px)`;
    for (let i = currentItem - 1; i >= 0; i--) {
      items[i].style.transform = `translateX(${currentWidth + width}px)`;
    }
    currentWidth += width;
    currentItem--;
  }
});

//scroll

const nav = document.querySelectorAll(".top-navigation ul li");

const scrollSelectors = [];

scrollSelectors[0] = document.querySelector(".main");
scrollSelectors[1] = document.querySelector(".we-offer");
scrollSelectors[2] = document.querySelector(".delivery-pay");
scrollSelectors[3] = document.querySelector(".faq");

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", () => {
    if (isMenu) {
      navigation.classList.toggle("active");
      document.body.classList.toggle("lock");
    }
    scrollSelectors[i].scrollIntoView({ behavior: "smooth" });
  });
}

const menu = document.querySelector(".menu");
const navigation = document.querySelector("header");

document.body.classList.toggle("lock");

let isMenu = false;
console.log(menu);

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
const items = document.querySelectorAll(".slider-item");

currentItem = 0;
currentWidth = 0;

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

/////
// get our elements
const slider = document.querySelector(".slider-line"),
  slides = Array.from(document.querySelectorAll(".slider-item"));

// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0;

// add our event listeners
slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img");
  // disable default image drag
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());
  // pointer events
  slide.addEventListener("pointerdown", pointerDown(index));
  slide.addEventListener("pointerup", pointerUp);
  slide.addEventListener("pointerleave", pointerUp);
  slide.addEventListener("pointermove", pointerMove);
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
});

function nextSlide() {
  if (currentIndex >= slides.length - 1) {
    return;
  }
  currentIndex++;
  setPositionByIndex();
}
function prevSlide() {
  if (currentIndex <= 0) {
    return;
  }
  currentIndex--;
  setPositionByIndex();
}

// make responsive to viewport changes
window.addEventListener("resize", setPositionByIndex);

// prevent menu popup on long press
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

// use a HOF so we have index in a closure
function pointerDown(index) {
  return function (event) {
    currentIndex = index;
    startPos = event.clientX;
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add("grabbing");
  };
}

function pointerMove(event) {
  if (isDragging) {
    const currentPosition = event.clientX;
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function pointerUp() {
  cancelAnimationFrame(animationID);
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;

  // if moved enough negative then snap to next slide if there is one
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

  // if moved enough positive then snap to previous slide if there is one
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

  setPositionByIndex();

  slider.classList.remove("grabbing");
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setPositionByIndex() {
  currentTranslate =
    currentIndex * -(slides[0].getBoundingClientRect().width + 40);
  prevTranslate = currentTranslate;
  setSliderPosition();
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

//loader

const mask = document.querySelector(".mask");

window.addEventListener("load", () => {
  mask.style.opacity = "0";
  document.body.classList.toggle("lock");
  setTimeout(() => {
    mask.remove();
  }, 500);
});

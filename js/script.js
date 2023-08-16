const menu = document.querySelector(".menu");
const navigation = document.querySelector("header");

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
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".slider-item");

currentItem = 0;
currentWidth = 0;

// next.addEventListener("click", () => {
//   let width = items[0].getBoundingClientRect().width + 40;
//   if (currentItem !== items.length - 1) {
//     items[currentItem].style.transform = `translateX(${
//       currentWidth - width
//     }px)`;
//     for (let i = currentItem + 1; i < items.length; i++) {
//       items[i].style.transform = `translateX(${currentWidth - width}px)`;
//     }
//     currentWidth -= width;
//     currentItem++;
//   }
// });

// prev.addEventListener("click", () => {
//   const width = items[0].getBoundingClientRect().width + 40;
//   if (currentItem !== 0) {
//     items[currentItem].style.transform = `translateX(${
//       currentWidth + width
//     }px)`;
//     for (let i = currentItem - 1; i >= 0; i--) {
//       items[i].style.transform = `translateX(${currentWidth + width}px)`;
//     }
//     currentWidth += width;
//     currentItem--;
//   }
// });

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

/////
let slider2 = document.querySelector(".slider"),
  sliderList = slider.querySelector(".slider-track"),
  sliderTrack = slider.querySelector(".slider-line"),
  slides = slider.querySelectorAll(".slider-item"),
  // arrows = slider.querySelector("slider button"),
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  swipeStartTime,
  swipeEndTime,
  getEvent = function () {
    return event.type.search("touch") !== -1 ? event.touches[0] : event;
  },
  slide = function () {
    if (transition) {
      sliderTrack.style.transition = "transform .5s";
    }
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * (slideWidth + 40)
    }px, 0px, 0px)`;

    prev.classList.toggle("disabled", slideIndex === 0);
    next.classList.toggle("disabled", slideIndex === --slides.length);
  },
  swipeStart = function () {
    let evt = getEvent();

    if (allowSwipe) {
      swipeStartTime = Date.now();

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = "";

      document.addEventListener("touchmove", swipeAction);
      document.addEventListener("mousemove", swipeAction);
      document.addEventListener("touchend", swipeEnd);
      document.addEventListener("mouseup", swipeEnd);

      sliderList.classList.remove("grab");
      sliderList.classList.add("grabbing");
    }
  },
  swipeAction = function () {
    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (
        (posInit > posX1 && transform < nextTrf) ||
        (posInit < posX1 && transform > prevTrf)
      ) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = `translate3d(${
        transform - posX2
      }px, 0px, 0px)`;
    }
  },
  swipeEnd = function () {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener("touchmove", swipeAction);
    document.removeEventListener("mousemove", swipeAction);
    document.removeEventListener("touchend", swipeEnd);
    document.removeEventListener("mouseup", swipeEnd);

    sliderList.classList.add("grab");
    sliderList.classList.remove("grabbing");

    if (allowSwipe) {
      swipeEndTime = Date.now();
      if (
        Math.abs(posFinal) > posThreshold ||
        swipeEndTime - swipeStartTime < 300
      ) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }
    } else {
      allowSwipe = true;
    }
  },
  setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function () {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
sliderList.classList.add("grab");

sliderTrack.addEventListener("transitionend", () => (allowSwipe = true));
slider.addEventListener("touchstart", swipeStart);
slider.addEventListener("mousedown", swipeStart);

next.addEventListener("click", function () {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    slide();
  }
});
prev.addEventListener("click", function () {
  if (slideIndex > 0) {
    slideIndex--;
    slide();
  }
});

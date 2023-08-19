"use strict";

/////////////////////// Variable \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const btnNav = document.querySelector(".btn-mobile-nav");

const navbar = document.querySelector(".navbar-nav");
const arrowDown = document.querySelector(".arrow-down");
const openSubMenu = document.querySelector(".open-submenu");
const subMenu = document.querySelector(".submenu-menu");

const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-search");

const btnsSubMenu = document.querySelectorAll(".submenu-item");
const btnsMainNav = document.querySelectorAll(".nav-item");

const navbarHeader = document.querySelector(".navbar-header");
const navHeight = navbarHeader.getBoundingClientRect().height;
const sectionHero = document.querySelector(".section-hero");
///////////////////// Functions \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const opnClsMenu = () => {
  navbar.classList.toggle("nav-open");
  btnNav.children.item(0).style.transform = "rotate(0deg) ";
  btnNav.children.item(1).style.opacity = "1";
  btnNav.children.item(2).style.transform = "rotate(0deg)  ";
};

const opnClsSubMenu = () => {
  subMenu.classList.toggle("hidden");
  if (!subMenu.classList.contains("hidden")) {
    arrowDown.style.transform = "rotate(180deg)";
  } else {
    arrowDown.style.transform = "rotate(0deg)";
    btnNav.children.item(0).style.transform = "rotate(0deg) ";
    btnNav.children.item(1).style.opacity = "1";
    btnNav.children.item(2).style.transform = "rotate(0deg)  ";
  }
};

const getHref = (btn) => {
  const href = btn.childNodes[1].getAttribute("href");

  if (href === "#") window.scrollTo({ top: 20, behavior: "smooth" });

  if (href !== "#" && href?.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
};

//////////// Navigation  \\\\\\\\\\\\\\\\

btnNav.addEventListener("click", () => {
  opnClsMenu();
  if (navbar.classList.contains("nav-open")) {
    btnNav.children.item(0).style.transform =
      "rotate(45deg) translate(0px, 11px)";
    btnNav.children.item(1).style.opacity = "0";
    btnNav.children.item(2).style.transform =
      "rotate(-45deg)  translate(0px, -12px)";
  } else {
    btnNav.children.item(0).style.transform = "rotate(0deg) ";
    btnNav.children.item(1).style.opacity = "1";
    btnNav.children.item(2).style.transform = "rotate(0deg)  ";
  }
});

btnsMainNav.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    getHref(btn);
    if (btn.classList.contains("main-nav-link")) {
      opnClsMenu();
    }
  })
);

openSubMenu.addEventListener("click", opnClsSubMenu);

btnsSubMenu.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    getHref(btn);
    opnClsSubMenu();
    if (btn.classList.contains("main-nav-link")) {
      opnClsMenu();
    }
  });
});

btnSearch.addEventListener("click", () => {
  inputSearch.classList.toggle("active");
});

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver((entries) => {
  const [entry] = entries;

  !entry.isIntersecting
    ? navbarHeader.classList.add("sticky")
    : navbarHeader.classList.remove("sticky");
}, options);

observer.observe(sectionHero);
//////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var macyInstance = Macy({
  container: ".image-container-one",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    576: 2,
    992: 3,
  },
  margin: {
    x: 43,
    y: 42,
  },
});

var macyInstance = Macy({
  container: ".image-container-two",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    576: 2,
    992: 3,
  },
  margin: {
    x: 43,
    y: 42,
  },
});

//////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const showMoreButton = document.querySelector(".btn-show-more");
const imageContainerOne = document.querySelector(".image-container-one");
const imageContainerTwo = document.querySelector(".image-container-two");
const gradientBackground = document.querySelector(".gradient-background");

const imagesContainerOne = [...imageContainerOne.querySelectorAll("img")];
const imagesContainerTwo = [...imageContainerTwo.querySelectorAll("img")];

showMoreButton.addEventListener("click", () => {
  imageContainerTwo.classList.toggle("hidden");

  gradientBackground.classList.toggle("hidden");
  showMoreButton.style.bottom = "0";

  showMoreButton.childNodes[1].textContent = "Zwiń";
  showMoreButton.childNodes[3].style.transform = "rotate(180deg)";

  if (!gradientBackground.classList.contains("hidden")) {
    showMoreButton.style.bottom = "5%";
    showMoreButton.childNodes[1].textContent = "Rozwiń";
    showMoreButton.childNodes[3].style.transform = "rotate(0deg)";
  }
});

setTimeout(() => {
  imageContainerTwo.classList.add("hidden");
}, 2000);

//////////////////////////////// Popup with images gallery \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const popupWindow = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");

const slideImg = document.querySelector(".slide-image");

const leftArrow = document.querySelector(".popup-left-arrow");
const rightArrow = document.querySelector(".popup-right-arrow");

const popupBackground = document.querySelector(".popup-background");

let currentSlide = 0;

imagesContainerOne.forEach((item, i) => {
  item.addEventListener("click", () => {
    changeSlide(i);
    popupWindow.classList.toggle("popup-open");
    setTimeout(() => {
      popupBackground.classList.remove("hidden");
    }, 1600);
  });
});
imagesContainerTwo.forEach((item, i) => {
  item.addEventListener("click", () => {
    changeSlide(i);
    popupWindow.classList.toggle("popup-open");
    setTimeout(() => {
      popupBackground.classList.remove("hidden");
    }, 1600);
  });
});

const changeSlide = (i) => {
  let imgPath = `./assets/projects/Photo_${i}.png`;
  slideImg.src = imgPath;

  currentSlide = i;
};

closeBtn.addEventListener("click", () => {
  popupWindow.classList.toggle("popup-open");
  setTimeout(() => {
    popupBackground.classList.add("hidden");
  }, 1000);
});

leftArrow.addEventListener("click", () => {
  currentSlide > 0
    ? changeSlide(currentSlide - 1)
    : changeSlide(imagesContainerOne.length - 1);
});

rightArrow.addEventListener("click", () => {
  currentSlide < imagesContainerOne.length - 1
    ? changeSlide(currentSlide + 1)
    : changeSlide(0);
});

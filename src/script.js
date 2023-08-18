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

const opnClsMenu = () => navbar.classList.toggle("nav-open");

const opnClsSubMenu = () => {
  subMenu.classList.toggle("hidden");
  if (!subMenu.classList.contains("hidden")) {
    arrowDown.style.transform = "rotate(180deg)";
  } else {
    arrowDown.style.transform = "rotate(0deg)";
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

"use strict";

/////////////////////// Variable\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//////////// Navigation  \\\\\\\\\\\\\\\\
const btnNav = document.querySelector(".btn-mobile-nav");
const navbar = document.querySelector(".navbar-nav");
const arrowDown = document.querySelector(".arrow-down");
const openSubMenu = document.querySelector(".open-submenu");
const subMenu = document.querySelector(".submenu-menu");

const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-search");

btnNav.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  if (navbar.classList.contains("nav-open")) {
    btnNav.children.item(0).style.transform =
      "rotate(45deg) translate(0px, 12px)";
    btnNav.children.item(1).style.opacity = "0";
    btnNav.children.item(2).style.transform =
      "rotate(-45deg)  translate(0px, -13px)";
  } else {
    btnNav.children.item(0).style.transform = "rotate(0deg) ";
    btnNav.children.item(1).style.opacity = "1";
    btnNav.children.item(2).style.transform = "rotate(0deg)  ";
  }
});

openSubMenu.addEventListener("click", () => {
  subMenu.classList.toggle("hidden");
  if (!subMenu.classList.contains("hidden")) {
    arrowDown.style.transform = "rotate(180deg)";
  } else {
    arrowDown.style.transform = "rotate(0deg)";
  }
});

btnSearch.addEventListener("click", () => {
  inputSearch.classList.toggle("active");
});

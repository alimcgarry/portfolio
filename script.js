"use strict";

const hamburger = document.querySelector(".navbar__hamburger");
const mobileNav = document.querySelector(".navbar__mobileNav");
const mobileNavLinks = document.querySelectorAll(".navbar__navLink--mobile");

hamburger.addEventListener("click", toggleMobileNav);

hamburger.addEventListener("click", toggleMobileNav);

mobileNavLinks.forEach((nav) => {
  nav.addEventListener("click", toggleMobileNav);
});

function toggleMobileNav() {
  mobileNav.classList.toggle("navbar__mobileNav--active");
  hamburger.classList.toggle("opened");
  hamburger.setAttribute("aria-expanded", this.classList.contains("opened"));
}

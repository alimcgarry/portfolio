'use strict'

const hamburgerBtnOpen = document.querySelector(".hamburger-open");
const hamburgerBtnClose = document.querySelector(".hamburger-close");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerBtnOpen.addEventListener('click', toggleMobileNav);
hamburgerBtnClose.addEventListener('click', toggleMobileNav);

function toggleMobileNav () {
    mobileNav.classList.toggle('hidden')
}

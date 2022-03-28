const introBody = document.querySelector(".intro-body");
// const navLink = document.querySelector(".navcontainer");
const body = document.querySelector(".scroll-container");
const sections = document.querySelector(".section");



window.addEventListener(
  "DOMContentLoaded",
  () => {
    setTimeout(() => {
      introBody.classList.add("load");
    }, 500);
  },
  2000
);

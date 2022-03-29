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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// <!--~~~~~~~~~~~~~~~ Heeader ~~~~~~~~~~~~~~~-->
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navLink = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

close.addEventListener("click", () => {
  menu.classList.add("hidden");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

const dropDown = document.querySelector(".dropdown");
const scrollbar = document.querySelector(".scrollbar");
const countryList = document.querySelector(".country-list");


dropDown.addEventListener("click", () => {
  scrollbar.classList.remove("hidden");
  menu.classList.remove("hidden");
});
for (let i = 0; i < countryList.children.length; i++) {
  const element = countryList.children[i];
  element.addEventListener("click", () => {
    scrollbar.classList.add("hidden");
    console.log("click");
  });
}

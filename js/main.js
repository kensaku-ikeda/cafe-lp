const btn = document.querySelector(".hamburger-btn");
const nav = document.querySelector(".header-nav");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  body.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen);
});

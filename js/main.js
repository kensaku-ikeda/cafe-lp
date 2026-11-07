const btn = document.querySelector(".hamburger-btn");
const nav = document.querySelector(".header-nav");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".header-nav a");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  body.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    body.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
  });
});

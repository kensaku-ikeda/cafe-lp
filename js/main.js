const btn = document.querySelector(".hamburger-btn");
const nav = document.querySelector(".header-nav");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", isOpen);
});

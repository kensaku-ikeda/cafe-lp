// 要素の取得
const btn = document.querySelector(".hamburger-btn");
const nav = document.querySelector(".header-nav");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".header-nav a");

// ハンバーガーアイコンが押されたら、メニューが開閉する
btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  // メニュー表示中はスクロールを無効化
  body.classList.toggle("open");
  // aria-expandedを切り替えることで、読み上げソフトで開閉の状態がわかるように
  btn.setAttribute("aria-expanded", isOpen);
});

// メニューでリンクをクリックしたら、メニューを閉じる
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    body.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
  });
});

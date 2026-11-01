/* global confetti */

let prevIndex = 0;

const coffeePackList = [
  "bluemountain",
  "brazil",
  "colombia",
  "ethiopia",
  "guatemala",
  "peru",
];

function getRandomIndex() {
  return Math.floor(Math.random() * coffeePackList.length);
}

function showNextImage() {
  let curIndex = getRandomIndex();
  while (prevIndex === curIndex) {
    curIndex = getRandomIndex();
  }
  changeCoffeeImage(coffeePackList[curIndex]);
  prevIndex = curIndex;
}

function setShuffleButton() {
  const btn = document.querySelector(".shuffle-btn");
  btn.addEventListener("click", () => {
    const intervalId = setInterval(showNextImage, 100);
    btn.disabled = true;
    btn.textContent = "シャッフル中・・・";
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "シャッフルする";
      clearInterval(intervalId);
      confetti();
    }, 3000);
  });
}

function changeCoffeeImage(coffeeName) {
  const beansImage = document.querySelector(".beans-image");
  beansImage.src = `images/coffee-pack-images/${coffeeName}.jpg`;
  beansImage.alt = coffeeName;
}

setShuffleButton();

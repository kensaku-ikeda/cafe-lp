/* global confetti */

let prevIndex = 0;
const imageChangeInterval = 100;
const shuffleTotalTime = 3000;

// この配列とHTMLのliのリストの並び順を一致させる。
// 理由は番号で画像とハイライトを対応させるため。
const coffeePackList = [
  "brazil",
  "colombia",
  "ethiopia",
  "peru",
  "bluemountain",
  "guatemala",
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
  highlightCountry(curIndex);
  prevIndex = curIndex;
}

function setShuffleButton() {
  const btn = document.querySelector(".shuffle-btn");
  btn.addEventListener("click", () => {
    const intervalId = setInterval(showNextImage, imageChangeInterval);
    btn.disabled = true;
    btn.textContent = "シャッフル中・・・";
    setTimeout(() => {
      clearInterval(intervalId);
      btn.disabled = false;
      btn.textContent = "シャッフルする";
      confetti();
    }, shuffleTotalTime);
  });
}

function changeCoffeeImage(coffeeName) {
  const beansImage = document.querySelector(".beans-image");
  beansImage.src = `images/coffee-pack-images/${coffeeName}.jpg`;
  beansImage.alt = coffeeName;
}

function highlightCountry(index) {
  const highLight = document.querySelectorAll(".shuffle-list li");
  highLight.forEach((light) => {
    light.style.backgroundColor = "";
  });
  highLight[index].style.backgroundColor = "#7cb342";
}

setShuffleButton();

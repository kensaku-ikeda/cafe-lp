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

function setShuffleButton() {
  const btn = document.querySelector(".shuffle-btn");
  btn.addEventListener("click", () => {
    let curIndex = getRandomIndex();
    while (prevIndex === curIndex) {
      curIndex = getRandomIndex();
    }
    changeCoffeeImage(coffeePackList[curIndex]);
    prevIndex = curIndex;
  });
}

function changeCoffeeImage(coffeeName) {
  const beansImage = document.querySelector(".beans-image");
  beansImage.src = `images/coffee-pack-images/${coffeeName}.jpg`;
  beansImage.alt = coffeeName;
}

setShuffleButton();

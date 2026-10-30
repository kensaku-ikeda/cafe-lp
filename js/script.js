const coffeePackList = [
  "bluemountain",
  "brazil",
  "colombia",
  "ethiopia",
  "guatemala",
  "peru",
];

function getRandomNumber() {
  return Math.floor(Math.random() * coffeePackList.length);
}

function setShuffleButton() {
  const btn = document.querySelector(".shuffle-btn");
  btn.addEventListener("click", () => {
    changeCoffeeImage(coffeePackList[getRandomNumber()]);
  });
}

function changeCoffeeImage(coffeeName) {
  const beansImage = document.querySelector(".beans-image");
  beansImage.src = `images/coffee-pack-images/${coffeeName}.jpg`;
}

setShuffleButton();

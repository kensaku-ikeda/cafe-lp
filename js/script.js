const coffeePack = [
  "bluemountain",
  "brazil",
  "colombia",
  "ethiopia",
  "guatemala",
  "peru",
];

function randomNumber() {
  return Math.floor(Math.random() * coffeePack.length);
}

function randomCoffeePack() {
  const btn = document.querySelector(".shuffle-btn");
  btn.addEventListener("click", () => {
    return coffeeNameImagePass(coffeePack[randomNumber()]);
  });
}

function coffeeNameImagePass(coffeeName) {
  const beansimage = document.querySelector(".beans-image");
  beansimage.src = `images/coffee-pack-images/${coffeeName}.jpg`;
}

randomCoffeePack();

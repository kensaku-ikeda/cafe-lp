/* global confetti */

let prevIndex = -1;
const imageChangeInterval = 100;
const shuffleTotalTime = 3000;

const bell = new Audio("sounds/Bell_Accent.mp3");

// このオブジェクトとHTMLのliのリストの並び順を一致させる。
// 理由は番号で画像とハイライトを対応させるため。
// 説明文は後々JSONファイルにまとめてデータ化する。
const coffeePackList = [
  {
    en: "brazil",
    ja: "ブラジル",
    profile: "ナッツやチョコレートのような風味と、ほどよいコクが特徴です。",
    taste: {
      bitterness: 3,
      sweetness: 4,
      acidity: 2,
      body: 4,
      aroma: 4,
    },
  },
  {
    en: "colombia",
    ja: "コロンビア",
    profile: "甘みと酸味のバランスがよく、豊かな香りを楽しめます。",
    taste: {
      bitterness: 2,
      sweetness: 4,
      acidity: 4,
      body: 3,
      aroma: 4,
    },
  },
  {
    en: "ethiopia",
    ja: "エチオピア",
    profile: "華やかな花の香りと、柑橘や果実を思わせる風味が特徴です。",
    taste: {
      bitterness: 1,
      sweetness: 4,
      acidity: 5,
      body: 2,
      aroma: 5,
    },
  },
  {
    en: "peru",
    ja: "ペルー",
    profile: "すっきりとした口当たりで、やさしい甘みと穏やかな酸味があります。",
    taste: {
      bitterness: 2,
      sweetness: 3,
      acidity: 2,
      body: 2,
      aroma: 3,
    },
  },
  {
    en: "bluemountain",
    ja: "ブルーマウンテン",
    profile:
      "上品な香りとまろやかな口当たりで、味わいのバランスに優れています。",
    taste: {
      bitterness: 2,
      sweetness: 4,
      acidity: 3,
      body: 3,
      aroma: 4,
    },
  },
  {
    en: "guatemala",
    ja: "グアテマラ",
    profile: "豊かなコクに、チョコレートやスパイスを思わせる風味があります。",
    taste: {
      bitterness: 3,
      sweetness: 3,
      acidity: 3,
      body: 4,
      aroma: 4,
    },
  },
];

function getRandomIndex() {
  return Math.floor(Math.random() * coffeePackList.length);
}

function showNextImage() {
  let curIndex = getRandomIndex();
  while (prevIndex === curIndex) {
    curIndex = getRandomIndex();
  }
  changeCoffeeImage(coffeePackList[curIndex].en);
  highlightCountry(curIndex);
  prevIndex = curIndex;
}

function playBell() {
  bell.play();
}

function setShuffleButton() {
  const btn = document.querySelector(".shuffle-btn");
  const description = document.querySelector(".coffee-description span");
  const profile = document.querySelector(".coffee-description p");
  btn.addEventListener("click", () => {
    const intervalId = setInterval(showNextImage, imageChangeInterval);
    btn.disabled = true;
    btn.textContent = "シャッフル中・・・";
    description.textContent = "???";
    profile.textContent = "";
    setTimeout(() => {
      clearInterval(intervalId);
      btn.disabled = false;
      btn.textContent = "シャッフルする";
      description.textContent = coffeePackList[prevIndex].ja;
      profile.textContent = coffeePackList[prevIndex].profile;
      playBell();
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

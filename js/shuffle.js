// 外部のライブラリなので、定義エラーを回避するため
/* global confetti */ // 紙吹雪のライブラリ

// 前回の画像番号を入れる変数。まだ一度もシャッフルしていない状態を表す値として、どの画像番号とも重ならない-1を設定している。
let prevIndex = -1;

// 設定値
const imageChangeInterval = 100; // 画像が切り替わる速度
const shuffleTotalTime = 3000; // シャッフルの総時間
const mugMaxIntensity = 5; // マグカップの最大数

// font-awesomeのアイコン
const emptyMug = '<i class="fa-solid fa-mug-saucer empty-mug"></i>';
const filledMug = '<i class="fa-solid fa-mug-saucer filled-mug"></i>';

// 音声の読み込み・音の遅延対策
const bell = new Audio("sounds/Bell_Accent.mp3");

// 要素の取得
const btn = document.querySelector(".shuffle-btn");
const description = document.querySelector(".coffee-description span");
const profile = document.querySelector(".coffee-description p");
const mugIntensities = document.querySelectorAll(".coffee-description li span");

// このオブジェクトとHTMLのliのリストの並び順を一致させる。
// 理由は番号で画像とハイライトを対応させるため。
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

// ランダムな番号を取得する
function getRandomIndex() {
  return Math.floor(Math.random() * coffeePackList.length);
}

// 画像のパスを返す
function getImagePath(coffeeName) {
  return `images/coffee-pack-images/${coffeeName}.jpg`;
}

// 画像を切り替える・同じ画像が連続するのを防ぐ
function showNextImage() {
  let curIndex = getRandomIndex();
  while (prevIndex === curIndex) {
    curIndex = getRandomIndex();
  }
  changeCoffeeImage(coffeePackList[curIndex]);
  highlightCountry(curIndex);
  prevIndex = curIndex;
}

// 音声を再生
function playBell() {
  bell.play();
}

// すべての画像を事前に読み込む
function preloadImage() {
  coffeePackList.forEach((coffeePack) => {
    const image = new Image();
    image.src = getImagePath(coffeePack.en);
  });
}

// ボタンを押してから、止まるまでの動作
function setShuffleButton() {
  btn.addEventListener("click", () => {
    const intervalId = setInterval(showNextImage, imageChangeInterval);
    updateButtonState(true, "シャッフル中・・・");
    resetResult();
    setTimeout(() => {
      clearInterval(intervalId);
      updateButtonState(false, "シャッフルする");
      displayResult();
      playBell();
      confetti();
    }, shuffleTotalTime);
  });
}

// ボタンの状態とボタンテキストの変化
function updateButtonState(isDisabled, text) {
  btn.disabled = isDisabled;
  btn.textContent = text;
}

// コーヒーの特徴をリセットする
function resetResult() {
  description.textContent = "???";
  profile.textContent = "";
  mugIntensities.forEach((intensity) => {
    intensity.innerHTML = "";
  });
}

// コーヒーの特徴を画面に表示
function displayResult() {
  description.textContent = coffeePackList[prevIndex].ja;
  profile.textContent = coffeePackList[prevIndex].profile;
  const mugIntensityArray = Object.values(coffeePackList[prevIndex].taste);
  mugIntensities.forEach((intensity, index) => {
    intensity.innerHTML = makeMugIcon(mugIntensityArray[index]);
  });
}

// マグカップアイコンの数を計算し、マグカップのアイコンを返す
function makeMugIcon(mugCount) {
  const emptyMugCount = mugMaxIntensity - mugCount;
  return filledMug.repeat(mugCount) + emptyMug.repeat(emptyMugCount);
}

// 画像のsrcとalt属性を切り替える
function changeCoffeeImage(coffeePack) {
  const beansImage = document.querySelector(".beans-image");
  beansImage.src = getImagePath(coffeePack.en);
  beansImage.alt = coffeePack.ja;
}

// コーヒー豆リストの背景をハイライトする
function highlightCountry(index) {
  const highLight = document.querySelectorAll(".shuffle-list li");
  highLight.forEach((light) => {
    light.style.backgroundColor = "";
  });
  highLight[index].style.backgroundColor = "#7cb342";
}

// 関数の実行
setShuffleButton();
preloadImage();

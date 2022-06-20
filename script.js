const main = document.querySelector(".main");
const timer = document.querySelector(".timer");

let cardsNumber = "";
let currentPair = "";
let memory = "";
let pairsCount = "";
let stopwatch = "";
let time = "";

const image = [
  "Ken.jpg",
  "matsuyama.jpg",
  "Misugi.jpg",
  "sawada.jpg",
  "Tachibana.jpg",
  "Tsubasa.jpg",
  "wakabayashi.jpg",
];



function chooseNumberCards() {
  cardsNumber = Number(
    prompt(`Com quantas cartas você deseja jogar?Escolha um número par entre 4 e 14.`));

  if (!(!isNaN(cardsNumber) && (cardsNumber % 2 === 0) && (cardsNumber >= 4) && (cardsNumber <= 14))) {
    chooseNumberCards();
  }
}


/*
const image = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif", 
    "unicornparrot.gif"
  ];
  
const main = document.querySelector(".header");
const timer = document.querySelector(".memoryCard");
  
  let time = null;
  let deck = null;
  let interval = null;
  let flipCount = null;
  let pairsCount = null;
  let currentPair = null;
  let cardsNumber = null;

 function startGame() {
    timer.textContent = "0";
currentPair = [];
pairsCount = 0;
flipCount = 0;
time = 0;
  
chooseCardsNumber();
createDeck();
createBoard();
  
interval = setInterval(() => (timer.textContent = `${++time}`), 1000);
}  
startGame();

function chooseCardsNumber() {
    cardsNumber = prompt(`Escolha a quantidade de cartas que deseja jogar?Escolha números pares entre 4 e 14`);
  
    if (!((!isNaN(cardsNumber) && (cardsNumber % 2 === 0) && (cardsNumber >= 4) && (cardsNumber <= 14)))) {
      chooseCardsNumber();
    }
}

function createDeck() {
    deck = [];
    for (let i = 0; i < cardsNumber / 2; i++) {
      deck.push(image[i]);
      deck.push(image[i]);
    }
  
    deck.sort(() => Math.random() - 0.5);
  }
  
  function createBoard() {
    let cardsHTML = "";
    for (let i = 0; i < cardsNumber; i++) {
      cardsHTML += createCard(deck[i]);
    }
  
    main.innerHTML = cardsHTML;
  }
  
  function createCard(cardImage) {
    return `
    <div class="card" data-identifier="card" onclick="userFlip(this, '${cardImage}')">
      <div class="front face" data-identifier="front-face">
        <img src="images/${cardImage}" alt="parrot gif"/>
      </div>
      
      <div class="back face" data-identifier="back-face">
        <img src="images/front 1.png" alt="parrot" />
      </div>
    </div>
  `
  }

  function flip(card) {
    card.classList.toggle("flipped");
  }
  
  function userFlip(card, title) {
    if (canBeFlipped(card)) {
      flip(card);
      flipCount++;
      currentPair.push([card, title]);
      console.log(currentPair);
      if (currentPair.length === 2) {
        validatePair();
      }
    }
  }
  
  function validatePair() {
    if (checkPair()) {
      currentPair[0][0].classList.add("paired");
      currentPair[1][0].classList.add("paired");
      currentPair = [];
      if (++pairsCount === numberOfCards / 2) {
        gameOver();
      }
    } else {
      setTimeout(computerFlip, 1000);
    }
  }
  
  function gameOver() {
    clearInterval(interval);
    alert(`Você ganhou em ${flipCount} jogadas e ${time} segundos!`);
    const playAgain = prompt("Deseja jogar novamente? [sim/não]");
    if (playAgain === "sim") {
      game();
    }
  }
  
  function computerFlip() {
    const flippedCards = document.querySelectorAll(".flipped:not(.paired)");
    for (const flippedCard of flippedCards) {
      flippedCard.classList.remove("flipped");
    }
  
    currentPair = [];
  }
  
  function canBeFlipped(card) {
    return currentPair.length !== 2 && !card.classList.contains("flipped");
  }
  
  function checkPair() {
    return currentPair[0][1] === currentPair[1][1];
  }
  

*/
let time = null;
let deck = null;
let interval = null;
let flipCount = null;
let pairsCount = null;
let currentPair = null;
let cardsNumber = null;

const image = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif", 
  "unicornparrot.gif"
];

const main = document.querySelector(".main");
const timer = document.querySelector(".timer");

function startGame() {
  timer.textContent = "0";
  currentPair = [];
  pairsCount = 0;
  flipCount = 0;
  time = 0;

  chooseCardsNumber();
  createDeck();
  createBoard();

  interval = setInterval(() => (timer.textContent = `${++time}`), 1000);
}
startGame();


function chooseCardsNumber() {
  cardsNumber = prompt(`Escolha a quantidade de cartas que deseja jogar?Escolha números pares entre 4 e 14`);

  if (!((!isNaN(cardsNumber) && (cardsNumber % 2 === 0) && (cardsNumber >= 4) && (cardsNumber <= 14)))) {
    chooseCardsNumber();
  }
}




function createDeck() {
  deck = [];
  for (let i = 0; i < cardsNumber / 2; i++) {
    deck.push(image[i]);
    deck.push(image[i]);
  }

  deck.sort(() => Math.random() - 0.5);
}

function createBoard() {
  let cardsHTML = "";
  for (let i = 0; i < cardsNumber; i++) {
    cardsHTML += createCard(deck[i]);
  }

  main.innerHTML = cardsHTML;
}

function createCard(cardImage) {
  return `
  <div class="card" data-identifier="card" onclick="userFlip(this, '${cardImage}')">
    <div class="front face" data-identifier="front-face">
      <img src="images/${cardImage}" alt="parrot gif"/>
    </div>
    
    <div class="back face" data-identifier="back-face">
      <img src="images/front 1.png" alt="parrot" />
    </div>
  </div>
`;
}

function flip(card) {
  card.classList.toggle("flipped");
}

function userFlip(card, title) {
  if (canBeFlipped(card)) {
    flip(card);
    flipCount++;
    currentPair.push([card, title]);
    console.log(currentPair);
    if (currentPair.length === 2) {
      validatePair();
    }
  }
}

function validatePair() {
  if (checkPair()) {
    currentPair[0][0].classList.add("paired");
    currentPair[1][0].classList.add("paired");
    currentPair = [];
    if (++pairsCount === numberOfCards / 2) {
      gameOver();
    }
  } else {
    setTimeout(computerFlip, 1000);
  }
}

function gameOver() {
  clearInterval(interval);
  alert(`Você ganhou em ${flipCount} jogadas e ${time} segundos!`);
  const playAgain = prompt("Deseja jogar novamente? [yes/no]");
  if (playAgain === "yes") {
    startGame();
  }
}

function computerFlip() {
  const flippedCards = document.querySelectorAll(".flipped:not(.paired)");
  for (const flippedCard of flippedCards) {
    flippedCard.classList.remove("flipped");
  }

  currentPair = [];
}

function canBeFlipped(card) {
  return currentPair.length !== 2 && !card.classList.contains("flipped");
}

function checkPair() {
  return currentPair[0][1] === currentPair[1][1];
}


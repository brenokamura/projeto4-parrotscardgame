const PARROTS = [
    "revertitparrot.gif",
    "bobrossparrot.gif",
    "tripletsparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "explodyparrot.gif",
    "unicornparrot.gif",
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
      deck.push(PARROTS[i]);
      deck.push(PARROTS[i]);
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
  
  function createCard(frontImage) {
    return `
    <div class="card" data-identifier="card" onclick="userFlip(this, '${frontImage}')">
      <div class="front face" data-identifier="front-face">
        <img src="images/${frontImage}" alt="parrot gif"/>
      </div>
      
      <div class="back face" data-identifier="back-face">
        <img src="images/back.png" alt="parrot" />
      </div>
    </div>
  `
  }
  
function startGame() {
  timer.textContent = "0";
  currentPair = [];
  pairsCount = 0;
  flipCount = 0;
  time = 0;

  chooseNumberCards();
  setMemory();
  deckCreate();

  interval = setInterval(() => (timer.textContent = `${++time}`), 1000);
}

const superCampeoes = [
  "Ken.jpg",
  "matsuyama.jpg",
  "Misugi.jpg",
  "sawada.jpg",
  "Tachibana.jpg",
  "Tsubasa.jpg",
  "wakabayashi.jpg"
];

const main = document.querySelector(".main");
const timer = document.querySelector(".timer");

let time = "";
let memory = "";
let interval = "";
let flipCount = "";
let pairsCount = "";
let currentPair = "";
let cardsNumber = "";

startGame();



//Condicional para a escolha da quantidade de cartas que irá jogar.
function chooseNumberCards() {
  cardsNumber = Number(
    prompt(`Com quantas cartas você deseja jogar?Escolha um número par entre 4 e 14.`));

  if (!((cardsNumber >= 4) && (cardsNumber <= 14) && (cardsNumber % 2 === 0) && (!isNaN(cardsNumber)) )) {
    chooseNumberCards();
  }
}

//Pega o número de cartas digitadas pelo jogador e as divide por 2 e adiciona as imagens(aos pares) aleatoriamente ao jogo.
function setMemory() {
  memory = [];
  for (let i = 0; i < cardsNumber / 2; i++) {
    memory.push(superCampeoes[i]);
    memory.push(superCampeoes[i]);
  }
  memory.sort(() => Math.random() - 0.5);
}

//Adiciona as cartas ao jogo, conforme digitado no início do jogo.
function deckCreate() {
  let cardsHTML = "";
  for (let i = 0; i < cardsNumber; i++) {
    cardsHTML += cardCreate(memory[i]);
  }
  main.innerHTML = cardsHTML;
}

//Adiciona imagem as cartas, tanto frente(imagens da pasta image ) como verso(imagem única).
//Cia efeito onclick(para virar a carta) através da função flipped.
function cardCreate(cardImage) {
  return `
  <div class="card" data-identifier="card" onclick="flipped(this, '${cardImage}')">
    <div class="front face" data-identifier="front-face">
      <img src="images/${cardImage}"/>
    </div>
    <div class="back face" data-identifier="back-face">
      <img src="images/back.jpg"  />
    </div>
  </div>
`;
}

//adiciona ou remove a classe flipped(girar/virar)
function flip(element) {
  element.classList.toggle("flipped");
}

//se o tamanho do par atual for diferente de 2 e não conter a classe flipped
//adiciona flip a carta
//conta a quantidade de flip
//se o tamanho do par atual for 2 valida o par
function flipped(element, text) {
  if (canFlipped(element)) {
    flip(element);
    flipCount++;
    currentPair.push([element, text]);
    if (currentPair.length === 2) {
      validatePair();
    }
  }
}

//checa se o par é válido
//se a quantidade de par for igual a de cartas divido por 2, o jogo acaba
function validatePair() {
  if (verifyPair()) {
    currentPair[0][0].classList.add("paired");
    currentPair[1][0].classList.add("paired");
    currentPair = [];
    if (++pairsCount === cardsNumber / 2) {
      gameOver();
    }
  } else {
    setTimeout(setFlip, 1000);
  }
}
//se o jogo acabou, pausamos o cronometro
// inserimos uma mensagem falando o número de jogadas e o tempo
//se quer jogar novamente
function gameOver() {
  clearInterval(interval);
  alert(`Você ganhou em ${flipCount} jogadas e ${time} segundos!`);
  const newGame = prompt("Você gostaria de jogar novamente? [y/n]");
  if (newGame === "y") {
    startGame();
  }
}

function setFlip() {
  currentPair[0][0].classList.remove("flipped");
  currentPair[1][0].classList.remove("flipped");
  currentPair = [];
}

function canFlipped(card) {
  return currentPair.length !== 2 && !card.classList.contains("flipped");
}

function verifyPair() {
  return currentPair[0][1] === currentPair[1][1];
}
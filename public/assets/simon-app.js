let roundCount = null;
let simonSequence = [];
let playerSequence = [];
const colorBtns = document.querySelectorAll(".light-buttons > div");
const startBtn = document.querySelector(".start");
const counterEl = document.querySelector("#counter");
const messageEl = document.querySelector("#message");
const soundMap = {
  green: document.getElementById("green-sound"),
  red: document.getElementById("red-sound"),
  yellow: document.getElementById("yellow-sound"),
  blue: document.getElementById("blue-sound"),
};

startBtn.addEventListener("click", startGame);
function addPlayerListeners() {
  colorBtns.forEach((colorButton) => {
    colorButton.addEventListener("click", handlePlayerMove);
  });
}

function removePlayerListeners() {
  colorBtns.forEach((colorButton) => {
    colorButton.removeEventListener("click", handlePlayerMove);
  });
}

function startGame() {
  roundCount = 1;
  counterEl.textContent = roundCount;
  messageEl.textContent = "";
  simonSequence = [];
  playerSequence = [];
  simonTurn();
}
const sounds = {
  green: new Audio("/assets/sounds/green.mp3"),
  red: new Audio("/assets/sounds/red.mp3"),
  yellow: new Audio("/assets/sounds/yellow.mp3"),
  blue: new Audio("/assets/sounds/blue.mp3"),
};

const playSound = (color) => {
  if (sounds[color]) {
    sounds[color].currentTime = 0; // Restarting sound if it's already playing
    sounds[color].play().catch((error) => console.error("Playback error:", error));
  } else {
    console.error(`Sound for ${color} not found`);
  }
};

function simonTurn() {
  simonSays = true;
  removePlayerListeners();
  simonSequence = updateSimonSequence(roundCount);
  showSimonSequence(setPlayerTurn);
}

function updateSimonSequence() {
  simonSequence.push(
    colorBtns[Math.floor(Math.random() * colorBtns.length)].id
  );
  return simonSequence;
}

function activateButton(color) {
  const colorButton = Array.from(colorBtns).find(
    (button) => button.id === color
  );
  colorButton.classList.add("active");
  playSound(color);
  setTimeout(() => {
    colorButton.classList.remove("active");
  }, 700);
}

function showSimonSequence() {
  setTimeout(() => {
    simonSequence.forEach((color, index) => {
      setTimeout(() => {
        activateButton(color);
      }, index * 800);
    });
    setTimeout(setPlayerTurn, simonSequence.length * 800);
  }, 550);
}

function setPlayerTurn() {
  simonSays = false;
  addPlayerListeners();
}

function handlePlayerMove(event) {
  if (simonSays) {
    return;
  }
  const selectedColor = event.target.id;
  playerSequence.push(selectedColor);
  event.target.classList.add("active");
  playSound(selectedColor);
  setTimeout(() => {
    event.target.classList.remove("active");
  }, 750);
  checkPlayerMove();
}

function checkPlayerMove() {
  for (let i = 0; i < playerSequence.length; i++) {
    if (playerSequence[i] !== simonSequence[i]) {
      removePlayerListeners();
      endGame();
      return;
    }
  }
  if (playerSequence.length === simonSequence.length) {
    removePlayerListeners();
    setTimeout(() => {
      roundCount++;
      counterEl.textContent = roundCount;
      playerSequence = [];
      simonTurn();
    }, 1000);
  }
}

function endGame() {
  counterEl.textContent = "";
  messageEl.textContent = "Try again!";
  colorBtns.forEach((colorButton) => {
    colorButton.removeEventListener("click", handlePlayerMove);
  });
  messageTimeout = setTimeout(() => {
    messageEl.textContent = "";
  }, 2500);
}

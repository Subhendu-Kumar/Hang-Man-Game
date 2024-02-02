// constants and variable declaration
const keyboard = document.querySelector(".keyboard");
const hintArea = document.querySelector(".hint-text-area");
const wordArea = document.querySelector(".word-display");
const wrongGuess = document.querySelector(".guesses");
const hangMan = document.querySelector(".hang-man");
const game_over = document.querySelector(".game-over");
const resultImg = document.querySelector(".imageWin");
const resultText = document.querySelector(".result");
const modalText = document.querySelector(".model-text");
const playAgainBtn = document.querySelector(".play-again");
let currentWord;
let wrongGuessCount;
const maxGuess = 6;
let correctWord;

//create keyboard buttons dynamically
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboard.appendChild(button);
  button.addEventListener("click", (e) =>
    initializeGame(e.target, String.fromCharCode(i))
  );
}

// showing the hint text
const showHint = (text) => {
  hintArea.innerText = text;
};

// showing dash according to word length
const showWordArea = (word) => {
  wordArea.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
};

// reset the game to play again
const resetGame = () => {
  // resetting all game variablw and ui elements
  correctWord = [];
  wrongGuessCount = 0;
  hangMan.src = `./img/hangman-${wrongGuessCount}.svg`;
  wrongGuess.innerText = `${wrongGuessCount} / ${maxGuess}`;
  keyboard.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  game_over.classList.remove("show");
};

// selecting a random word form the list of words
const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  showHint(hint);
  resetGame();
  showWordArea(word);
};

//implementing game over
const gameOver = (isvictory) => {
  if (isvictory) {
    resultImg.src = "./img/victory.gif";
    resultText.innerText = "Congrats!";
    modalText.innerHTML = `You Found The Word : <b>${currentWord}</b>`;
  } else {
    resultImg.src = "./img/lost.gif";
    resultText.innerText = "Game Over!";
    modalText.innerHTML = `The Correct Word Was : <b>${currentWord}</b>`;
  }
  setTimeout(() => {
    game_over.classList.add("show");
  }, 200);
};

// initialize the game
const initializeGame = (button, clickedletter) => {
  if (currentWord.includes(clickedletter)) {
    //showing correct letter in wordArea
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedletter) {
        correctWord.push(letter);
        wordArea.querySelectorAll("li")[index].innerText = letter;
        wordArea.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    // if clicked letter doesn't exists the update wrong guess and hang man
    wrongGuessCount++;
    hangMan.src = `./img/hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true;
  wrongGuess.innerText = `${wrongGuessCount} / ${maxGuess}`;

  // calling game over if these condition meets
  if (wrongGuessCount === maxGuess) {
    return gameOver(false);
  }
  if (correctWord.length === currentWord.length) {
    return gameOver(true);
  }
};

// start the game
getRandomWord();
// to reset the game
playAgainBtn.addEventListener("click", getRandomWord);

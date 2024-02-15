// function play() {
//   //  step-1 hide the home screen. To hide screen, add a class named hidden to the home section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // step-2 show the playground
//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function play() {
  // hide everything, show only playground
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("score");
  // reset score and life
  setTextElementValueById("current-score", 0);
  setTextElementValueById("current-life", 5);
  continueGame();
}
function continueGame() {
  // step-1 generate a random alphabet
  const alphabet = getARandomAlphabet();
  // step-2 set the random alphabet on the screen
  setInnerTextById("current-alphabet", alphabet);
  //   step -3 set background color on keyboard of the random alphabet
  addBackgroundColorById(alphabet);
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);
function handleKeyboardKeyUpEvent(event) {
  // get the key pressed
  const playerPressed = event.key;
  // stop game when esc button is pressed
  if (playerPressed === "Escape") {
    gameOver();
  }
  // get the expected alphabet to press from screen
  const expectedAlphabet = getElementTextById("current-alphabet");
  // check matched or not
  if (playerPressed === expectedAlphabet) {
    // update score
    // 1. get the current score
    const currentScore = getTextElementValueById("current-score");
    // 2. increase score by 1
    const newScore = currentScore + 1;
    // 3. show the updated score
    setTextElementValueById("current-score", newScore);
    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // update life
    // 1. get the current life
    const currentLife = getTextElementValueById("current-life");
    // 2. decrease score by 1
    const newLife = currentLife - 1;
    // 3. show the updated life
    setTextElementValueById("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("score");
  // update final score
  const score = getTextElementValueById("current-score");
  setTextElementValueById("final-score", score);
  // clear the last selected alphabet
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}

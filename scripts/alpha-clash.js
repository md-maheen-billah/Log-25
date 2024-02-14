// function play() {
//   //  step-1 hide the home screen. To hide screen, add a class named hidden to the home section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // step-2 show the playground
//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
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

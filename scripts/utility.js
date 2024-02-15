// add a class
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
// remove a class
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   get a random index from 0 to 25 as there are 26 letters in alphabets
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}
// show the output on a specified spot as innerText
function setInnerTextById(elementId, output) {
  const AreaSpan = document.getElementById(elementId);
  AreaSpan.innerText = output;
}
function getTextElementValueById(elementId) {
  const currentElement = document.getElementById(elementId);
  const currentElementText = currentElement.innerText;
  const currentElementValue = parseInt(currentElementText);
  return currentElementValue;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const textElement = element.innerText;
  const text = textElement.toLocaleLowerCase();
  return text;
}

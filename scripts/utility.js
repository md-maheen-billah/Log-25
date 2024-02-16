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
// get the output of an element as innerText converted to integer
function getElementTextConvertedToIntegerById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  const integer = parseInt(text);
  return integer;
}
// get the output of an element as innerText converted to lowercase
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  const textToLowerCase = text.toLocaleLowerCase();
  return textToLowerCase;
}
// set a value on a specified spot as innerText
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

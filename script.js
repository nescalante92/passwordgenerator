// The constant variables apply to the DOM and connect to the input functions
// This includes the password textbox,checkboxes and the generate button
const passwordEl = document.getElementById('#passwordinput')
const characterEl = document.getElementById('#includeCharacter');
const upperEl = document.getElementById('#includeUpper');
const lowerEl = document.getElementById('#includeLower');
const numberEl = document.getElementById('#includeNumber');
const symbolEl = document.getElementById('#includeSymbol');
const generateBtn = document.getElementById('#generate');

//var randomObject = groups all the Upper/Lower/Number/Symbol Functions together
//I researched how to use Character Codes to reduce amount of Arrays I need and to keep code cleaner
// Math.random ()= generates a random rumber within perameter
//Math.floor ()= helps to round numbers

// var randomObject ={
//   upper: getUpper,
//   lower: getLower,
//   number: getNumber,
//   symbol: getSymbol,
// };




//Add eventListender to respond to when specific items are clicked on or selected









//Functions provide the range of letter/number/symbol values that that will be randomly produced
function getUpper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}
  console.log(getUpper());



function getLower() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}
  console.log(getLower());


function getNumber() {
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}
  console.log(getNumber());



function getSymbol() {
  const symbol = '!@#$%^&*(){}[]=<>';
  return symbol[Math.floor(Math.random() * symbol.length)];
}
  console.log(getSymbol());













































// function writePassword() {
//   if (generateBtn)
//   console.log("password textbox is working");



//   const password = generatePassword();7

//   passwordText.value = password;


// Loop to ranomly choose password




// I researched how to add character codes to keep codes instead of using an array




// Add event listener to generate button
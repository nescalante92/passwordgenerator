
// The var generateBtn applies to the DOM and connects to the generate button
var generateBtn = document.querySelector("#generate");
var finalInput = document.querySelector("#password");

//Add variables to create the arrays needed to input the characters into password
//.split allows a segment from the array to be taken
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split();
var numberCase = "0123456789".split();
var symbolCase = "!@#$%^&*(){}[]<>?*".split();


//Promt allows UI to receive the first message and starts character input process
//Create generateFunction() to connect to writePassword() 

function generatePassword() {
  var finalInput = prompt("Please choose a Character length between 8-128");
  
  if (finalInput < 8 || finalInput > 128) {
    alert("Please choose a Character length between 8-128");
    return;
  }
  //Confrim allows UI to make a choice between yes and no for their input
  var upperConfirm = confirm("Would you like to include Uppercase Letters?");
  var lowerConfirm = confirm("Would you like to include Lowercase Letters?");
  var numberConfirm = confirm("Would you like to include Numbers?");
  var symbolConfirm = confirm("Would you like to include Symbols?");
  console.log(upperConfirm, lowerConfirm, numberConfirm, symbolConfirm)
  
  //If statement confirms UI choices as true or false
  //Alerts allow UI to to get a message and help confirm their choice
  var finalPassword = "";

  if (upperConfirm === true) {
    finalPassword = finalPassword.concat(upperCase);
    alert("Uppercase Letters have been added");
    
  }
  if (lowerConfirm === true) {
    finalPassword = finalPassword.concat(lowerCase);
    alert("Lowercase Letters have been added");
    
  }
  if (numberConfirm === true) {
    finalPassword = finalPassword.concat(numberCase);
    alert("Numbers have been added");
    
  }
  if (symbolConfirm === true) {
    finalPassword = finalPassword.concat(symbolCase);
    alert("Symbols have been added");
    
  }
  console.log(finalPassword);

  //For loop helps to generte random character selections and adds them together
  
  var newPassword = "";
  for (var i = 0; i < finalInput; i++) {
    newPassword = newPassword + finalPassword[Math.floor(Math.random() * finalPassword.length)]
  }
  console.log(newPassword);
  return newPassword;

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









 


























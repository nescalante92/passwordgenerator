// Assignment constants/variables to each checkbox option = Global DOM
const generateBtn = document.querySelector("#generate");
const boxCharacter = document.querySelector("#numberOfCharacters");
const boxUpper = document.querySelector("#IncludeUppercaseLetters");
const boxLower = document.querySelector("#IncludeLowercaseLetters");
const boxNumber= document.querySelector("#IncludeNumbers");
const boxSymbol = document.querySelector("#IncludeSymbols");

const boxUpper="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split;
const boxLower="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split;
const boxNumber="0,1,2,3,4,5,6,7,8,9".split;
const boxSymbol="~!@#$%^&*()_-+={}[]\|;:<>?,./*".split;

// I researched how to add character codes to add characters from predetermind list in order to avoid using arrays
// Concat = connect arrays together
// These variables organize and list all possible characters within their category
const boxUpper = (65,90)
const boxlower = (97,122)
const boxlower = (48,57)
const boxSymbol = (33, 47).concat(58,64).concat(91,96).concat(123,126)

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password").value = password;
  var password = generatePassword();
 
  passwordText.value = password;

// Loop to ranomly choose password
for (var i = 0; i )
  


// I researched how to add character codes to keep codes instead of using an array
function generatePassword(boxCharacter,boxUpper,boxLower,boxNumber,boxSymbol ) {
  String

  
  





Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
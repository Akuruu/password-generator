// Assignment Code
pw = 0;
var generateBtn = document.querySelector("#generate");
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

//----------------------------------------------------------------------------------------------------------------------------
//main function to write code in
function writePassword() {
  var password = generatePassword();
  var passwordDiv = document.querySelector("#password");
  passwordDiv.value = password;

}
//example array to store possible passwords
var potentialPw = []


//password length
function generatePassword() {
var passwordLength = prompt("How long would you like your password to be?");
//NaN = Not a Number
if (isNaN(passwordLength)) {
  alert("Please type a number")
  //restarts function if user does not input a number
  generatePassword();
} else
//if password length doesn't meet the requirements then restart
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters");
  //restarts functoin if user does not input the correct length
  generatePassword();
} else {
}
//uppercase info
var upper = confirm("Do you want your password to contain uppercase letters?");
//pulls from uppercase array
if (upper) {
//concats from arrays
    potentialPw = potentialPw.concat(upperCase);
} else { 
}
//lowercase info
var lower = confirm("Do you want your password to contain lowercase letters?");
//pulls from lowercase array
if (lower) {
  //concats from arrays
  potentialPw = potentialPw.concat(lowerCase);
} else {
}
//number info
var number = confirm("Do you want your password to contain numbers?");
//pulls from numberChars array
if (number) {
//concats from arrays
  potentialPw = potentialPw.concat(numberChars);
} else{
}
//special character info
var special = confirm("Do you want your password to contain special characters?");
//pulls from specialChars array
if (special) {
//concats from arrays
  potentialPw = potentialPw.concat(specialChars);
} else{
}
//password output for potential password
var pw = []; 
//loop 
for (let i = 0; i < passwordLength; i++){
  var random = potentialPw[Math.floor(Math.random() * potentialPw.length)];
  pw.push(random);
}

//refers to html id to print on the page
return document.getElementById("password").innerHTML = pw.join("");

//safety brace :) dont accidentally get rid of
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

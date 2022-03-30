// Assignment Code
pw = 0;
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];





//----------------------------------------------------------------------------------------------------------------------------
function writePassword() {
  var password = generatePassword();
  var passwordDiv = document.querySelector("#password");
  passwordDiv.value = password;

}


//password length
function generatePassword() {
var passwordLength = prompt("How long would you like your password to be?");
//pw length info
if (isNaN(passwordLength)) {
  alert("Please type a number")
  generatePassword();
} else

if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters");
  generatePassword();
} else {
}

//uppercase info
var upper = confirm("Do you want your password to contain uppercase letters?")

if (upper) {}

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

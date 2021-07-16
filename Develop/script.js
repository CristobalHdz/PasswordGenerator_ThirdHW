// https://w3collective.com/random-password-generator-javascript/

// DOM Elements
var generateBtn = document.querySelector("#generate");

/* Moved from "writePassword" function for a cleaner code */
var passwordText = document.querySelector("#password");

var lengthElement = document.getElementById("length");
var lowercaseElement = document.getElementById("lowercase");
var uppercaseElement = document.getElementById("uppercase");
var numberElement = document.getElementById("numbers");
var symbolElement = document.getElementById("symbols");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toLocaleUpperCase();
var numbers = "0123456789"
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"



// generateBtn.addEventListener("click", writePassword);
/* This event listener can be reduced into a annonymous arrow function */

// Write password to the #password input
generateBtn.addEventListener("click", () => {

  // Input Rules
  //No checkbox & value  more than 128
  if ((lengthElement.value > 128) && (lowercaseElement.checked == false && uppercaseElement.checked == false && numberElement.checked == false && symbolElement.checked == false)) {
    alert("Please select a character checkbox and a value of 128 or less")
    return;
  };

  //No checkboxes & value less than 8
  if ((lengthElement.value < 8) && (lowercaseElement.checked == false && uppercaseElement.checked == false && numberElement.checked == false && symbolElement.checked == false)) {
    alert("Please select a character checkbox and a value of 8 or more")
    return;
  };

  //Value less than 8
  if (lengthElement.value < 8) {
    alert("Please select a value of 8 or more")
    return;
  };

  //Value more than 128
  if (lengthElement.value > 128) {
    alert("Please select a value of 128 or less")
    return;
  };

  //No checkboxes
  if (lowercaseElement.checked == false && uppercaseElement.checked == false && numberElement.checked == false && symbolElement.checked == false) {
    alert("Please select a character checkbox")
    return;
  };

  var passwordCharacters = "";
  //Tells if boxes are checked and what to do
  lowercaseElement.checked ? (passwordCharacters += lowercase) : "";
  uppercaseElement.checked ? (passwordCharacters += uppercase) : "";
  numberElement.checked ? (passwordCharacters += numbers) : "";
  symbolElement.checked ? (passwordCharacters += symbols) : "";



  /* Merged both lines to clean the code*/
  // var password = generatePassword();
  // passwordText.value = password;
  passwordText.value = generatePassword(lengthElement.value, passwordCharacters);
});

var generatePassword = (lengthElement, passwordCharacters) => {
  let password = "";
  for (let i = 0; i < lengthElement; i++) {
    password += passwordCharacters.charAt(
      Math.floor(Math.random() * passwordCharacters.length)
    );
  }
  return password;
};
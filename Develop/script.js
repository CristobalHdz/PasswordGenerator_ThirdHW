// DOM Elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lengthElement = document.getElementById("length");
var lowercaseElement = document.getElementById("lowercase");
var uppercaseElement = document.getElementById("uppercase");
var numberElement = document.getElementById("numbers");
var symbolElement = document.getElementById("symbols");

//Password characters assigned to checkboxes
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toLocaleUpperCase();
var numbers = "0123456789"
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


generateBtn.addEventListener("click", () => {

  // Input Rules
  //No checkbox & value  more than 128
  if ((lengthElement.value > 128) && (lowercaseElement.checked == false && uppercaseElement.checked == false && numberElement.checked == false && symbolElement.checked == false)) {
    alert("Please select at least 1 character checkbox and a length of 128 or less")
    return;
  };
  //No checkboxes & value less than 8
  if ((lengthElement.value < 8) && (lowercaseElement.checked == false && uppercaseElement.checked == false && numberElement.checked == false && symbolElement.checked == false)) {
    alert("Please select at least 1 character checkbox and a length of 8 or more")
    return;
  };
  //Value less than 8
  if (lengthElement.value < 8) {
    alert("Please select at least 1 value of 8 or more")
    return;
  };
  //Value more than 128
  if (lengthElement.value > 128) {
    alert("Please select at least 1 value of 128 or less")
    return;
  };
  //No checkboxes
  if (lowercaseElement.checked == false && uppercaseElement.checked == false && numberElement.checked == false && symbolElement.checked == false) {
    alert("Please select at least 1 character checkbox")
    return;
  };

  //Checkbox event listener
  var passwordCharacters = "";
  lowercaseElement.checked ? (passwordCharacters += lowercase) : "";
  uppercaseElement.checked ? (passwordCharacters += uppercase) : "";
  numberElement.checked ? (passwordCharacters += numbers) : "";
  symbolElement.checked ? (passwordCharacters += symbols) : "";

  passwordText.value = generatePassword(lengthElement.value, passwordCharacters);
});

//Password character loop
var generatePassword = (lengthElement, passwordCharacters) => {
  let password = "";
  for (let i = 0; i < lengthElement; i++) {
    password += passwordCharacters.charAt(
      Math.floor(Math.random() * passwordCharacters.length)
    );
  }
  return password;
};
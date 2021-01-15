// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function
function password () {
  var code = 0;
  lower();
  upper();
  numb();
  spec();
  var passcode;
  // ask the user how long they want their password to be
  var passlength = prompt("How many characters do you want your password to be?");
  // provide a length for the password (8 - 128 characters)
  if ((passlength > "8") && passlength < "128") {
      return passcode[Math.floor(Math.random() * passcode.length)];
  } else if {
      
  }
}

// make a lowercase letters function
function lower(passw) {
  // list of lowercase letters
  const lowAlpha = "abcdefghijklmnopqrstuvwxyz";
  // ask the user if they want to add a lowercase
  var lower = prompt("Do you want to add a lowercase?")
  if (lower === "y"){
      code++
      return lowAlpha[Math.floor(Math.random() * lowAlpha.length)];
  } else if (lower === "n") {
  } else {
      alert("Not a valid choice. Pick again");
      lower();
  }
}

// make an uppercase letters function
function upper() {
  // list of uppercase letters
  const upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // ask the user if they want to add an uppercase
  var upper = prompt("Do you want to add a lowercase?")
  if (upper === "y"){
      code++
      return upAlpha[Math.floor(Math.random() * upAlpha.length)];
  } else if (upper === "n") {
  } else {
      alert("Not a valid choice. Pick again");
      upper();
  }
}

// make a numbers function
function numb() {
  // list of numbers from 0 to 9
  const digit = "0123456789";
  // ask the user if they want to add a number
  var num = prompt("Do you want to add a number?")
  // if the user says yes or no
  if (num === "y") {
      code++
      return digit[Math.floor(Math.random() * 10)];
  } else if (num === "n") {
  } else {
      alert("Not a valid choice. Pick again");
      numb();
  }
}

// make a special characters function
function spec () {
  // list of special characters
  const char = "!@#$%^&*~<>?";
  // ask the user if they want to add a special character
  var special = prompt("Do you want to add a special character?")
  // if the user says yes or no
  if (special === "y") {
      code++
      return char[Math.floor(Math.random() * char.length)];
  } else if (special === "n") {       
  } else {
      alert("Not a valid choice. Pick again");
      spec();
  }
}

// input is validated

password ();
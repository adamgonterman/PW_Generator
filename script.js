// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword () {
  // Determines how many characters the password will have
  var pwLength = prompt("How many characters would you like in your password?");
  var intLength = parseInt(pwLength);
  console.log(intLength);
 
  // Prompts the user to choose a number of characters between 8 and 128 if the response is out of the bounds or not a number
  if (intLength < 8 || intLength > 128 || isNaN(intLength)) {
    alert ("Please select a number of characters between 8 & 128.");
    return;
  }

  var pwCharacters = [];
  var UCCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
  var LCCharacters = "abcdefghiklmnopqrstuvwxyz" .split("");
  var numbers = "0123456789" .split ("");
  var specialCharacters= "!@#$%^&*()-+?<>}{|~;" .split("");


  // Determines if the password will include lowercase letters
  var wantLC = confirm("Do you want your password to be made with lowercase letters?");
  if(wantLC === true) {
    for (var i = 0; i < LCCharacters.length; i++) {
      pwCharacters.push(LCCharacters[i]);
    }
  }

  // Determines if the password will include uppercase letters
  var wantUC = confirm("Do you want your password to be made with uppercase letters?");
  if (wantUC === true) {
    for (var i = 0; i < UCCharacters.length; i++) {
      pwCharacters.push(UCCharacters[i]);
    }
  }
  // Determines if the password will include numbers
  var wantNumbers = confirm("Do you want your password to be made with numbers?");
  if (wantNumbers === true) {
    for (var i = 0; i < numbers.length; i++) {
      pwCharacters.push(numbers[i]);
    }
  }
  // Determines if the password will include special characters  
  var wantSC = confirm("Do you want your password to be made with special characters?");
  if (wantSC === true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      pwCharacters.push(specialCharacters[i]);
    }
  }

  // Generates the random password based on the responses received
  var finalPassword = "";
  for (var i = 0; i < intLength; i++) {
    pwCharacters[
      Math.floor(Math.random() * pwCharacters.length)];
    finalPassword +=
      pwCharacters[
        Math.floor(Math.random() * pwCharacters.length)];
      }
      return finalPassword;
    }
generateBtn.addEventListener("click", writePassword);
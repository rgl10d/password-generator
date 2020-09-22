// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){

  var passwordLength = prompt("How many characters would you like in your password?");
  var passwordLowerCase = confirm("Click OK if you want to include lowercase characters.");
  var passwordUpperCase = confirm("Click OK if you want to include uppercase characters.");
  var passwordNumber = confirm("Click OK if you want to include numeric characters.");
  var passwordSpecial = confirm("Click OK if you want to include special characters.");

  var characters = {
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: ["!", "#", "$", "%", "&", "(", ")", "*", "+" , "-" , "/", "<", "=", ">", "?", "@", "^"],
  }

  if (passwordLength >= 8 && passwordLength <= 128){
    console.log(passwordLength);
  }

  return "This will be replaced by my generated password.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

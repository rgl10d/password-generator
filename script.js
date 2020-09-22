// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){

  const characters = {
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    alphabetUpper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: ["!", "#", "$", "%", "&", "(", ")", "*", "+" , "-" , "/", "<", "=", ">", "?", "@", "^"],
  }; 
  var retvar = "";
  var startArray = [];
  var passwordLength = 0;
  
  do {
    passwordLength = parseInt(prompt("How many characters would you like in your password?"));
    
    if(passwordLength < 8 || passwordLength > 128){
      alert("Please choose a number between 8 and 128.");
    }
  } while (passwordLength < 8 || passwordLength > 128);


  do {
    var passwordLowerCase = confirm("Click OK if you want to include lowercase characters.");

    if(passwordLowerCase){
      startArray = startArray.concat(characters.alphabet);
    } 

    var passwordUpperCase = confirm("Click OK if you want to include uppercase characters.");

    if(passwordUpperCase){
      startArray = startArray.concat(characters.alphabetUpper);
    } 

    var passwordNumber = confirm("Click OK if you want to include numeric characters.");

    if(passwordNumber){
      startArray = startArray.concat(characters.numbers);
    }

    var passwordSpecial = confirm("Click OK if you want to include special characters.");

    if(passwordSpecial){
      startArray = startArray.concat(characters.special);
    }

    if(!passwordLowerCase && !passwordUpperCase && !passwordNumber && !passwordSpecial){
      alert("You need to choose at least one option.");
    }
    
  } while (!passwordLowerCase && !passwordUpperCase && !passwordNumber && !passwordSpecial);


  for (var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random() * startArray.length);
    retvar = retvar + startArray[random];
  }

  return retvar;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
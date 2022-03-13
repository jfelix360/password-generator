// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//global Generate Password Function
function generatePassword() {
  //initialize variables
  var wrd;
  var charLength = ''; 
  var lowerC = ''; 
  var upperC = '';
  var nums = '';
  var specialC = '';

  //prompt and store desired character length
  charLength = window.prompt('Enter Character Length', '8')

  //prompt and store if lower cases desired

  //prompt and store if upper cases desired

  //prompt and store if numbers are desired

  //prompt and store if special characters are desired

  //value that function will pass on after it runs
  return wrd;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
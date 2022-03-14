// Assignment code here


// **Get references to the #generate element** //
var generateBtn = document.querySelector("#generate");

// **Global Generate Password Function** //
function generatePassword() {
  //** 
  //initialize variables
  var wrd = '';
  var charBag = '';
  var charLength = ''; 
  var lowerC = ''; 
  var upperC = '';
  var nums = '';
  var specialC = '';

  //** 
  //prompt for user to enter character length
  charLength = window.prompt('Enter Character Length (input 8 - 128) for your password', '8');
  
  //convert user input to integer variable
  charLength = parseInt(charLength);
  
  //if loop that will inform user of invalid input if the user submits an input not within the accepted parameters
  if (charLength < 8 || charLength > 120) {
    window.alert("Invalid Input");
  }

  //confirmation of user's input choice
  window.alert('Thank you for choosing a ' + charLength + ' character length password.');


  //** 
  //prompt for user to decide if lowercase letters are desired in password
  lowerC = window.prompt('Include lowercase letters in your password? (Yes or No)');
  
  //if loop that will inform user of invalid input if the user submits an input not within the accepted parameters
  if (lowerC !== 'Yes' && lowerC !== 'No') {
    window.alert("Invalid Input");
  }

  //confirmation of user's input choice
  if (lowerC === 'Yes'){
    window.alert('You have chosen to include lowercase letters in your password');
  }

  if (lowerC === 'No'){
    window.alert('You have chosen not to include lowercase letters in your password');
  }


  //** 
  //prompt for user to decide if uppercase letters are desired in password
  upperC = window.prompt('Include uppercase letters in your password? (Yes or No)');
  
  //if loop that will inform user of invalid input if the user submits an input not within the accepted parameters
  if (upperC !== 'Yes' && upperC !== 'No') {
    window.alert("Invalid Input");
  }

  //confirmation of user's input choice
  if (upperC === 'Yes'){
    window.alert('You have chosen to include uppercase letters in your password');
  }

  if (upperC === 'No'){
    window.alert('You have chosen not to include uppercase letters in your password');
  }


  //** 
  //prompt for user to decide if numbers are desired in password
  nums = window.prompt('Include numbers in your password? (Yes or No)');
  
  //if loop that will inform user of invalid input if the user submits an input not within the accepted parameters
  if (nums !== 'Yes' && nums !== 'No') {
    window.alert("Invalid Input");
  }

  //confirmation of user's input choice
  if (nums === 'Yes'){
    window.alert('You have chosen to include numbers in your password');
  }

  if (nums === 'No'){
    window.alert('You have chosen not to include numbers in your password');
  }
  

  //** 
  //prompt and store if special characters are desired
  //prompt for user to decide if numbers are desired in password
  specialC = window.prompt('Include special characters in your password? (Yes or No)');
  
  //if loop that will inform user of invalid input if the user submits an input not within the accepted parameters
  if (specialC !== 'Yes' && specialC !== 'No') {
    window.alert("Invalid Input");
  }

  //confirmation of user's input choice
  if (specialC === 'Yes'){
    window.alert('You have chosen to include special characters in your password');
  }

  if (specialC === 'No'){
    window.alert('You have chosen not to include specials characters in your password');
  }


  //** 
  //Append appropriate character sets to charBag

  //** 
  //value that function will pass on after it runs
  return wrd;
}


// **Write password to the #password input** //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// **Add event listener to generate button** //
generateBtn.addEventListener("click", writePassword);

// ** TESTING AREA **


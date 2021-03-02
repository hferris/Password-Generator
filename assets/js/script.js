// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //validate password length
  var len = validateLength();
  console.log(len);
  
  var lowercase = validateInput("Do you want lowercase letters in your password?");
  console.log(lowercase);

  var uppercase = validateInput("Do you want uppercase letters in your password?");
  console.log(uppercase);
  
  var numbers = validateInput("Do you want numbers in your password?");
  console.log(numbers);

  var specialChar = validateInput("Do you want special characters in your password?");
  console.log(specialChar);

  // At least one character type should be selected
  if (!lowercase && !uppercase && !numbers && !specialChar)  {
    alert ("You must have at least one Y answer");
  } else {
    console.log("generate pw");
    var password = generatePassword(len, lowercase, uppercase, numbers, specialChar);

  }
 
  // 
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

function validateLength() {

  var passwordLen = 0;

  while(passwordLen < 8 || passwordLen > 128) {
    passwordLen = prompt("Enter your password length (must be between 8-128)");
  } 

  return passwordLen;

}

function validateInput(question) {

    userInput = confirm(question);

    return userInput;
  
}


function genratePassword(len, lowercase, uppercase, numbers, specialChar) {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

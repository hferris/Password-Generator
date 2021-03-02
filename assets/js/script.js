// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
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
    
    var passwordText = document.querySelector("#password");
    

    passwordText.value = password;
  }
 
  
  

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


function generatePassword(len, lowercase, uppercase, numbers, specialChar) {
  console.log(len);
  var password = [];
  var i = 1;

  while(i < len) {
    console.log(i);
    
    if (lowercase) {
     var s = getRandomItem(lowerCasedCharacters);
     console.log("PW b4: " + password);
     console.log("low: " + s);
      password.push(s);
      i++;
      console.log("i: " + i);
      console.log("PW after: " + password);
    }
    if (uppercase) {
      var s = getRandomItem(upperCasedCharacters);
      console.log("PW b4: " + password);
      console.log("up: " + s);
      password.push(s);
       i++;
       console.log("i: " + i);
       console.log("PW after: " + password);
     }
     if (numbers) {
      var s = getRandomItem(numericCharacters);
      console.log("PW b4: " + password);
      console.log("num: " + s);
      password.push(s);
       i++;
       console.log("i: " + i);
       console.log("PW after: " + password);
     }
     if (specialChar) {
       var s = getRandomItem(specialCharacters);
       console.log("PW b4: " + password);
       console.log("spec: " + s);
       password.push(s);
        i++;
        console.log("i: " + i);
        console.log("PW after: " + password);
      }
  }
  return password;
}
// Retrieve a random item from the provided array
function getRandomItem(arr) {
  // One liner of the above code
  return arr[Math.floor(Math.random() * arr.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

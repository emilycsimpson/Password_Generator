


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
parseInt(numericCharacters)


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

// * Generate a password when the button is clicked
// * Present a series of prompts (use 'confirm') for password criteria
//   * Length of password - user inputs number btw 8 and 128. If too short/long, error message should come up saying
//"PW must contain etc" or "PW length must be X"
var passwordLength = prompt("How many letters would you like your password to contain?");

// Function to ask user for password length
function getPasswordLength(passwordLength) {
  if (isNaN(passwordLength))
    alert("That is not a number") // I'd like this to return to the beginning of the prompt if the user doesn't input a number
  else if (passwordLength < 8 || passwordLength > 129) {
    alert("Password needs to be between 8 and 128 characters")
  }
  else return passwordLength
}

console.log(passwordLength) // Just to double-check my code
getPasswordLength(passwordLength);


//     * Special characters ($@%&*, etc) - OK or cancel
//     * Lowercase - OK or cancel
//     * Uppercase - OK or cancel
//     * Numeric - OK or cancel
var specialChoice = confirm("Would you like your password to include special characters?");
var lowerChoice = confirm("Would you like your password to include lower case letters?");
var upperChoice = confirm("Would you like your password to include upper case letters?");
var numericalChoice = confirm("Would you like your password to include numbers?");


// Function to prompt user for password options
function getPasswordOptions() {
  if (specialChoice !== true && lowerChoice !== true && upperChoice !== true && numericalChoice !== true) {
    alert("You must choose at least one of the four options!");
    // Code should validate for each input and at least one character type should be selected
  }
}

getPasswordOptions()



// * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor((Math.random() * arr.length))];
}

var userChoices = [];
var chosenPassword = [];

// Function to generate password with user input
function generatePassword() {
  if (specialChoice === true) {
    userChoices.push(specialCharacters)
  }
  if (lowerChoice === true) {
    userChoices.push(lowerCasedCharacters)
  }
  if (upperChoice === true) {
    userChoices.push(upperCasedCharacters)
  }
  if (numericalChoice === true) {
    userChoices.push(numericCharacters)
  } for (var i = 0; i < passwordLength; i++) {
    allChars = getRandom(userChoices);
    letters = getRandom(allChars);
    chosenPassword += letters
  } return chosenPassword
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
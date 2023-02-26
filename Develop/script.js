var generateBtn = document.querySelector("#generate");
// Vars
var lengthInput = ("How many characters do you want to use?");
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialArray = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":",]
var combinedArray = []


//Password Requirement Questions
function generatePassword(){
var lengthInput = prompt(("How many characters do you want to use?"))
if(lengthInput < 8 || lengthInput > 128){
  alert ('Length needs to be between 8 and 128, please try again')
}
else{
  var lowercaseQ = confirm("Do you want lowercase letters in your password? \nSelect cancel for no.")
  var uppercaseQ = confirm("Do want uppercase letters in your password? \nSelect cancel for no.")
  var numericQ = confirm("Do you want numbers in your password? \nSelect cancel for no.")
  var specialQ = confirm("Do you want special characters in your password? \nSelect cancel for no.")
}
if (lowercaseQ == false && uppercaseQ == false && numericQ == false && specialQ == false){
  combinedArray = combinedArray.concat(lowercaseArray)
}

if (lowercaseQ == true){
  combinedArray = combinedArray.concat(lowercaseArray)
}

if(uppercaseQ == true){
  combinedArray = combinedArray.concat(uppercaseArray)
}

if(numericQ == true){
  combinedArray =combinedArray.concat(numbericArray)
}

if(specialQ == true){
  combinedArray =combinedArray.concat(numbericArray)
}
}

//console.log(combinedArray)
//}

// Math.floor(Math.random() * combinedArray * lengthInput
//function generatePassword





// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    if (password === false) {
      return;
    }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

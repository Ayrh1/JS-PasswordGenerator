// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var finalArray = []

function generatePassword(){

  const length = prompt('Enter number of characters: (Min 8 & Max 128)');
 // Loop trigges the questions and confirms selections
  if (length == null){
    alert('Please enter a vaild number.');
  }else if (length < 8 || length > 128) {
    alert('Please enter a vaild number within range.');
  }else {
    var confirmLower = confirm('Would you like to add Lowercase letters?'); 
    var confirmUpper = confirm('Would you like to add Uppercase letters?');
    var confirmNumeric = confirm('Would you like to add numbers?');
    var confirmSymbols = confirm('Would you like to add Symbols?');
    
  }
//String 
  var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbersArray = [1,2,3,4,5,6,7,8,9,0];
  var upperletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var symbols =['~','!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','<','>','/','?'];
// if statements adds confirms selected criteria. 
  if(confirmNumeric === true){
    // Take my numbers varaible and add it to my finalArray variable
    finalArray = numbersArray.concat(finalArray);
  }

  if(confirmLower === true){
    finalArray = lowerLetters.concat(finalArray);
  }

  if(confirmUpper === true){
    finalArray = upperletters.concat(finalArray);
  }

  if(confirmSymbols === true){
    finalArray = symbols.concat(finalArray);
  }
   
  var password = [];

//loop generates password
  for(i=0; i < length; i ++){
    var randomNumber = Math.floor(Math.random() * finalArray.length);
    var randomLetter = finalArray[randomNumber];
    console.log(randomLetter);

    password.push(randomLetter);
  }
  console.log(password);
  var finalPaswword = password.join("");
  return finalPaswword; 
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // sends password 
  
  passwordText.value = password;
 
  return passwordText.value
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
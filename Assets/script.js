/* REQUIREMENTS:
- presented with a series of prompts for password criteria
- length (type a number between 8 and 128 characters)
- character type selection... (include lowercase/uppercase/numeric/special characters)
- validate inputs/MUST CHOOSE ONE CHARACTER TYPE
- display password in alert OR on page */

console.log(window);

// When Generate Password button is clicked on....
function generatePassword() {
  var length = Number(window.prompt("Choose password length. Must be between 8-128 characters.", ""));
  // If a user chooses a length less than 8 characters
  if (length < 8) {
    window.alert("Needs to be more than 8 characters.");
  // If a user chooses a length more than 128 characters
  } else if (length > 128) {
    window.alert("Needs to be less than 128 characters.");
  } else if (length <= 128 || length >= 8) {
  // If a user chooses a length between 8-128
    console.log(length);

    // Lowercase confirmation
    var lowercaseyes = (window.prompt("Should the password have lowercase letters?", ""));
    console.log(lowercaseyes);

    // Uppercase confirmation
    var uppercaseyes = (window.prompt("Should the password have uppercase letters?", ""));
    console.log(uppercaseyes);
    
    // Number confirmation
    var numbersyes = (window.prompt("Should the password have numbers?", ""));
    console.log(numbersyes);

    // Symbol confirmation
    var symbolsyes = (window.prompt("Should the password have symbols?", ""));
    console.log(symbolsyes);

    // If YES to all prompted questions...
    if (lowercaseyes == "yes" && uppercaseyes == "yes" && numbersyes == "yes" && symbolsyes == "yes") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var yyyy = (window.alert("Your password will have lowercase/uppercase letters, numbers, symbols, and a length of " + length + " characters."));
      console.log(yyyy);
      return password;

        // N N N N
      } else if (lowercaseyes == "no" && uppercaseyes == "no" && numbersyes == "no" && symbolsyes == "no") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nnnn = (window.alert("You have not specified any requirements."));
      console.log(nnnn);
      return "Must have at least one of the requirements selected. Please try again.";

        // Y Y Y N
      } else if (lowercaseyes == "yes" && uppercaseyes == "yes" && numbersyes == "yes" && symbolsyes == "no") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var yyyn = (window.alert("Your password will have lowercase/uppercase letters, numbers, and a length of " + length + " characters."));
      console.log(yyyn);
      return password;

        // Y Y N N
      } else if (lowercaseyes == "yes" && uppercaseyes == "yes" && numbersyes == "no" && symbolsyes == "no") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var yynn = (window.alert("Your password will have lowercase/uppercase letters and a length of " + length + " characters."));
      console.log(yynn);
      return password;

        // Y N N N
      } else if (lowercaseyes == "yes" && uppercaseyes == "no" && numbersyes == "no" && symbolsyes == "no") {
        var password = "";
        var answers = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var ynnn = (window.alert("Your password will have lowercase letters and a length of " + length + " characters."));
      console.log(ynnn);
      return password;
      
        // Y Y N Y
      } else if (lowercaseyes == "yes" && uppercaseyes == "yes" && numbersyes == "no" && symbolsyes == "yes") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var yyny = (window.alert("Your password will have lowercase/uppercase letters, symbols, and a length of " + length + " characters."));
      console.log(yyny);
      return password;
      
        // Y N N Y
      } else if (lowercaseyes == "yes" && uppercaseyes == "no" && numbersyes == "no" && symbolsyes == "yes") {
        var password = "";
        var answers = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var ynny = (window.alert("Your password will have lowercase letters, symbols, and a length of " + length + " characters."));
      console.log(ynny);
      return password;

        // N N N Y
      } else if (lowercaseyes == "no" && uppercaseyes == "no" && numbersyes == "no" && symbolsyes == "yes") {
        var password = "";
        var answers = "!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nnny = (window.alert("Your password will have symbols and a length of " + length + " characters."));
      console.log(nnny);
      return password;

        // Y N Y N
      } else if (lowercaseyes == "yes" && uppercaseyes == "no" && numbersyes == "yes" && symbolsyes == "no") {
        var password = "";
        var answers = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var ynyn = (window.alert("Your password will have lowercase letters, numbers, and a length of " + length + " characters."));
      console.log(ynyn);
      return password;

        // N Y N Y
      } else if (lowercaseyes == "no" && uppercaseyes == "yes" && numbersyes == "no" && symbolsyes == "yes") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nyny = (window.alert("Your password will have uppercase letters, symbols, and a length of " + length + " characters."));
      console.log(nyny);
      return password;

        // N N Y Y
      } else if (lowercaseyes == "no" && uppercaseyes == "no" && numbersyes == "yes" && symbolsyes == "yes") {
        var password = "";
        var answers = "0123456789!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nnyy = (window.alert("Your password will have numbers, symbols, and a length of " + length + " characters."));
      console.log(nnyy);
      return password;

        // N Y Y N
      } else if (lowercaseyes == "no" && uppercaseyes == "yes" && numbersyes == "yes" && symbolsyes == "no") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nyyn = (window.alert("Your password will have uppercase letters, numbers, and length of " + length + " characters."));
      console.log(nyyn);
      return password;

        // Y N Y Y
      } else if (lowercaseyes == "yes" && uppercaseyes == "no" && numbersyes == "yes" && symbolsyes == "yes") {
        var password = "";
        var answers = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var ynyy = (window.alert("Your password will have lowercase letters, numbers, symbols, and a length of " + length + " characters."));
      console.log(ynyy);
      return password;

        // N Y N N
      } else if (lowercaseyes == "no" && uppercaseyes == "yes" && numbersyes == "no" && symbolsyes == "no") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nynn = (window.alert("Your password will have uppercase letters and a length of " + length + " characters."));
      console.log(nynn);
      return password;

        // N N Y N
      } else if (lowercaseyes == "no" && uppercaseyes == "no" && numbersyes == "yes" && symbolsyes == "no") {
        var password = "";
        var answers = "0123456789";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nnyn = (window.alert("Your password will have numbers and a length of " + length + " characters."));
      console.log(nnyn);
      return password;

        // N Y Y Y
      } else if (lowercaseyes == "no" && uppercaseyes == "yes" && numbersyes == "yes" && symbolsyes == "yes") {
        var password = "";
        var answers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789!@#$%^&*()_+;.";
        for (let i = 1; i <= length; i++) {
          var char = Math.floor(Math.random() * answers.length + 1);
          password += answers.charAt(char);
          console.log(password);
        } 
      var nyyy = (window.alert("Your password will have uppercase letters, numbers, symbols, and a length of " + length + " characters."));
      console.log(nyyy);
      return password;

        // ? ? ? ?
      } else if (lowercaseyes != "no"   ||
                lowercaseyes != "yes"   ||
                uppercaseyes != "no"    ||
                uppercaseyes != "yes"   ||
                numbersyes != "no"      ||
                numbersyes != "yes"     ||
                symbolsyes != "no"      ||
                symbolsyes != "yes"    ) {
      var invalid = (window.alert("Please use yes or no to answer the questions regarding password requirements."));
      console.log(invalid);
      return "Please try again.";}
  // If a user doesn't input a number
  } else {
    window.alert("Must choose a number.");
    return "Please try again.";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
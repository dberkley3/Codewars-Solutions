/*INSTRUCTIONS

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */

//ANSWER

function position(letter){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const myLetterLowercase = letter.toLowerCase();
    const position = alphabet.indexOf(myLetterLowercase) + 1;
  
    return `Position of alphabet: ${position}`;
  }
/* INSTRUCTIONS 

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string. */

//ANSWER 

let capitals = function (word) {
    let output = [];
  for (let i=0; i<word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      output.push(i);
}
}
  return output;
};
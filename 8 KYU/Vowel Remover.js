/* INSTRUCTTIONS
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
*/

//ANSWER

function shortcut (string) {
    return string.split(/[aeiou]/g).join('');
  }
/* INSTRUCTIONS

 return str.split(" ").reverse().join(" ");

 */

 //ANSWER

 function remove (string) {
    if(string[string.length-1] == '!'){
  return string.split('').slice(0,string.split('').length-1).join('');
  } else {
  return string;
    }
  }
/* INSTRUCTIONS

hen provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One". */

//ANSWER

function switchItUp(number){
    let words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
     return words[number];
     }
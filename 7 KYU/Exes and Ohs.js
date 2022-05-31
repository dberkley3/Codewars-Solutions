// Exes and Ohs

function XO(str) {
    str = str.toLowerCase();
 
     let arrayOfCharacters = str.split("");
 
     let countX = arrayOfCharacters.reduce( function( n, val ) {
         return n + (val === 'x');
       }, 0);
       
     
     let countO = arrayOfCharacters.reduce( function( n, val ) {
         return n + (val === 'o');
       }, 0);
     
     if ( countX == countO ) {
       return true;
     } else {
       return false;
     }
 }
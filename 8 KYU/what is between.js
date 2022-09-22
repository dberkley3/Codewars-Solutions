/* INSTRUCTIONS
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/

//ANSWER

function between(a, b) {
    let arr1 = []
    for(let i = a; i <= b; i++){
      arr1.push(i)
    }
    
   return arr1
  }

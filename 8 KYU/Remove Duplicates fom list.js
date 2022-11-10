/* INSTRUCTIONS
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

//ANSWER

function distinct(a) {
    let arr = []
    for (let i = 0; i < a.length; i++){
      if(arr.indexOf(a[i])==-1){
        arr.push(a[i])
      }
    }
    return arr
  }
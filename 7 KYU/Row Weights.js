/* INSTRUCTIONS

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task:
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes:
Array size is at least 1.
All numbers will be positive. */

//ANSWER

function rowWeights(array){
    let odd = []
    let even = []
      for(var i=0;i<array.length;i++){
        if(i % 2 == 0){
        odd.push(array[i])
        } else {
        even.push(array[i])
        }
      }
      if(odd.length==0) odd.push(0)
      if(even.length==0) even.push(0)
      return [].concat(odd.reduce(function(a,b){return a+b}), even.reduce(function(a,b){return a+b}));
  }
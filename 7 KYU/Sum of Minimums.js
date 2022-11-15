/* INSTRUCTIONS
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.*/

//ANSWER

function sumOfMinimums(arr) {
    let result = []
      result.push(arr.map(function(row){return Math.min.apply(Math, row)}))
      result = result.reduce(function(a,b){return a.concat(b)})
      return result.reduce(function(a,b){return a+b})
  }
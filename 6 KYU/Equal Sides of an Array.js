/* INSTRUCTIONS
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1. */

//ANSWER

function findEvenIndex(arr) {
    let sum = 0,
     leftSum = 0;
 
   for (var i = 0; i < arr.length; i++) {
     sum += arr[i];
   }
 
   for (var i = 0; i < arr.length; i++) {
     sum -= arr[i];
 
     if (leftSum === sum) {
       return i;
     }
 
     leftSum += arr[i];
   }
 
   return -1;
 }
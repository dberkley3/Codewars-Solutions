/* INSTRUCTIONS 

Given a non-empty array of integers, return the result of multiplying the values together in order. Example: */

//ANSWER

function grow(x){
    return x.reduce((res,n)=> res*n);
   }
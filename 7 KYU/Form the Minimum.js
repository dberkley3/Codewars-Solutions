/* INSTRUCITONS
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). */

//ANSWER

function minValue(values){
    return +(Array.from(new Set(values))).sort((a,b)=>a-b).join('');
  }
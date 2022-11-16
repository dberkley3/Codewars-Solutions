/* INSTRUCTIONS
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000. */

//ANSWER

function getDivisorsCnt(n){
    for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  return d;
}
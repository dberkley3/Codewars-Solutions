// Odd or Even?

function oddOrEven(array) {
    let sum = 0;
  
  if (array.length !== 0) {
    sum = array.reduce((x, y) => x + y);
    return sum % 2 === 0 ? 'even' : 'odd';
    
  } else {
    return 'even';
  }
}
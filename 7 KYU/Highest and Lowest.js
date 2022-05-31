// Highest and Lowest

function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number).sort((a,b) => b - a)
       return arr[0] + " " + arr[arr.length - 1]
   }
   
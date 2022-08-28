/* INSTRUCITONS

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */

//ANSWER

function past(h, m, s){
    let secondsToMillisec = s * 1000;
    let minutesToMillisec = m * 60000;
    let hoursToMillisec = h * 3600000;
  
    return secondsToMillisec + minutesToMillisec + hoursToMillisec
  }
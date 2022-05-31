// Grasshopper - Grade book

function getGrade (s1, s2, s3) {
    let arr = []
  
  arr.push(s1,s2,s3)
  
  let score =  arr.reduce((a,b) => a+b)/3
  
  switch(true){
    case 90 <= score: return 'A'
   
    case 80 <= score: return 'B'
  
    case 70 <= score: return 'C'
   
    case 60 <= score: return 'D'
  
    case  0 <= score: return 'F'
  
      }
  }
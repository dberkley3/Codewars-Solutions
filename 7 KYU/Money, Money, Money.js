// Money, Money, Money

function calculateYears(principal, interest, tax, desired) {
    for ( var year = 0;; year++ ) {
     if ( principal >= desired ) {
       return year;
     }
     let currentYearInterest = interest * principal;
     
     let currentYearTax = currentYearInterest * tax;
     
     principal = principal + currentYearInterest - currentYearTax;
   
   }
}

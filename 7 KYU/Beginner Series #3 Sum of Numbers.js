// Beginner Series #3 Sum of Numbers

function getSum( a,b )
{
   if(a == b) {
        return a
    }
    else if (a < b) {
        return a + GetSum(a+1, b)
    } else {
        return a + GetSum(a-1, b)
    };
}
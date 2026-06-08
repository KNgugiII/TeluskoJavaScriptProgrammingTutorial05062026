/* Exercise: CONFIRM IF A NUMBER IS EITHER EVEN or ODD */
/* A number is even if its divisible by 2 else its odd*/

let varNum=11;
let varResult;  /*<-----variable has been left as undefined for now as it'll be assigned during runtime */

/* NOTE: The 3 EQUAL SIGNS === meant to imply EQUAL TO */

/* if (varNum % 2===0)
    varResult="Number is EVEN";
else
    varResult="Number is ODD";

console.log(varResult);  */

/* NOTE: To do the above but WITH LESS CODE and where the result can EITHER BE ONE OR THE OTHER, you'll need to use a TERNARY OPERATOR. It's denoted by a Question mark and Colon */

varResult= varNum%2===0 ? "EVEN" : "ODD";        /* <----Final result */

console.log(varResult);

    
    
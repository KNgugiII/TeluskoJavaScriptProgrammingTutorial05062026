/* Arrow Functions refer to Function Expressions(anonymous functions that have been assigned to variables) that have been condensed, not in the way it behaves but in how it looks. */

/* Example001 of a Function Expression */

//let dteMwakaGani=function()
//{
//    const dteTarehe=new Date();
//    return dteTarehe.getFullYear();    /* To ACCESS the Year, Day, Month one has to drill down to  */
//}                                   /* the Dot new Date properties  */

//let numThisYear=dteMwakaGani();

//console.log(numThisYear);

/* Arrow Function (Rewrite of the above Function Expression) */

let dteMwakaGani=() =>
{
    const dteTarehe=new Date();
    return dteTarehe.getFullYear();    
}  

let numThisYear=dteMwakaGani();

console.log(numThisYear);

/* Example002 of a Function Expression */

//let numAddition=function(num1,num2)
//                {
//                    return num1+num2;
//                };

//console.log(numAddition(45,55));

/* Arrow Function (Rewrite of the above Function Expression) */

let numAddition=(num1,num2) => num1+num2;

console.log(numAddition(4,55));

/* NOTE: 1-The word Function is NOT mentioned in an Arrow Function */
/* NOTE: 2-If the Function only has one statement, the curly brackets are removed (If there're many statements, then the curly brackets are included)*/
/* NOTE: 3-If the RETURN statement is the only statement you have, you can disregard it and include everything in one line - thereby reducing the amount of coding */
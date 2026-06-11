/* Functions as EXPRESSIONS imply that a variable will FIRST BE EVALUATED and then ASSIGNED */
/* To create EXPRESSION FUNCTIONS, the function WITHOUT A NAME is assigned to a variable as below */
/* NOTE: Arguments in such Expression Functions can still be provided */

/* Example 001 */
let dteTarehe=function()    /* ANONYMOUS FUNCTION because it doesn't have a name*/
                {
                    return new Date();      /* new Date() Retrieves todays date */
                };

let TareheYaLeo=dteTarehe();

console.log(TareheYaLeo);

/* NOTE: In Javascript, Functions are treated as OBJECTS as they are not listed as PRIMITIVE TYPES, ie strings, numbers, nulls, undefined. If they are not primitive data types, they are thus Objects */

/* EXAMPLE 002 */
let numAdd=function(num1,num2)
            {
                return num1+num2;
            };

console.log(numAdd(20,10));


/*To create variables in JS, always use the Let keyword before the variable name*/
/*Remember, there're certain words that are prohibited to be used as variable names, for instance 'name' */

/* Creates a string variable */
let varUserName='Navin'     /*Observation: One can use either double or single quotes but never both */
console.log(varUserName)

/* Creates a numerical variable */
let varNum=4
console.log(varNum+6)

/* The nature of variables is that they CAN CHANGE - please assess part 001 and part 002; */
/* Part001 */
let varRadius=14
let varPi=3.14
let varArea     /* Has been intentionally left AS IS */

varArea=(varPi * varRadius * varRadius)
console.log(varArea)

/* Part002 */
let varRadius01=14
let varPi01=3.14
let varArea01     /* Has been intentionally left AS IS */

varRadius01=21 /* The radius variable has been altered. In the below calculation, the latter as opposed to the former will be used. */

varArea01=(varPi01 * varRadius01 * varRadius01)
console.log(varArea01)

/* If a variable is a CONSTANT, use 'const' instead of 'let' */
/* CONSTANTS cannot be reassigned - an attempt to do so will lead to an error - please see below; */
/* Part003 */
let varRadius02=14
const varPi02=3.14  /* Has been SET AS A CONSTANT */
let varArea02     /* Has been intentionally left AS IS */

varPi02=21 /* Reassigning the constant will result in an error */

varArea02=(varPi02 * varRadius02 * varRadius02)
console.log(varArea02)
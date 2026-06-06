/* It's very much possible to CHANGE one datatype to another EXPLICITLY */
/* For instance, strings to numbers, numbers to strings and booleans to numbers. etc*/

/* Convert NUMBER TO STRING */
let varNum=6    /* Defines a number variable */

console.log(varNum,typeof(varNum))    /* At this stage, this is a number */

/* To convert NUMBER TO STRING, please refer to below;*/
let varNum001=String(6)    /* Converts a num to a string */

console.log(varNum001,typeof(varNum001))

/* Observation: JavaScript is CASE SENSITIVE. For instance, let varNum001=string(6) produced AN ERROR */

/* CONVERT STRING TO NUMBER */
let varStr='123'    /* Defines a string */
console.log(varStr,typeof(varStr))

/* To convert STRING TO NUMBER, please refer to below;*/
let varStr001=Number('123')
console.log(varStr001,typeof(varStr001))

/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* TYPE COERCION - It's a DOUBLE EDGED SWORD,When not careful, it can lead to unexpected results */
/* This is Javascripts way of trying to reach a CONSENSUS when data types DO NOT MATCH */
/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
/* Step001 */
let varCar  /* Variable hasn't been assigned anything */
console.log(varCar,typeof(varCar))      /* This will lead to an UNDEFINED,UNDEFINED */

/* Step002 */
let varCar002=8  
varCar002=varCar002 + " "   /* The ADDITION SIGN IMPLIES CONCATENATION, ie conversion to a string */
console.log(varCar002,typeof(varCar002))      /* This will lead to a NUMBER, STRING */

/* Step003 */
let varCar003=8  
varCar003=varCar003 - 2   /* The SUBTRACTION SIGN IMPLIES Subtraction, ie conversion to a number */
console.log(varCar003,typeof(varCar003))      /* This will lead to a NUMBER, NUMBER */

/* Step004 */
let varBool=Boolean(222)                  /* Converts it into a BOOLEAN TRUE*/
console.log(varBool,typeof(varBool))          /* This will lead to a TRUE, BOOLEAN */

/* You can CONVERT ANY NUMBER TO A BOOLEAN PROVIDED ITS NOT 0 - ZERO IMPLIES FALSE*/

/* Step005 */
let varBool005=Boolean(!1)                  /* The EXLAMATION MARK Converts it into a BOOLEAN FALSE*/
console.log(varBool005,typeof(varBool005))          /* This will lead to a FALSE, BOOLEAN */
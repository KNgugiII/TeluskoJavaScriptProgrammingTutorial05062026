/* Instead of CONCATENATING variables and strings, one can use a template literal as shown below; */

let varNum1=51;
let varNum2=99;
let varResult=(varNum1 + varNum2);

/* console.log('The addition of ' + varNum1 + ' and ' + varNum2 + ' equals to ' + varResult + '!'); */


/* The above statement can be rewritten as below using Template Literals */
console.log(`The addition of ${varNum1} and ${varNum2} equals to ${varResult}!`);
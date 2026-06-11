/* Javascript Functions - no arguments*/
function fGreeting(){
    console.log('Hello World');
};

/* fGreeting(); */

/* How to RETURN values from functions */
function fReturnVal(){
    return 'Hello Sasa Mrembo';           /* return keyword can ONLY BE USED ONCE, NOT MULTIPLE TIMES */
};


let varReturnedValue=fReturnVal();      /* Saves the returned value in the variable */

console.log(varReturnedValue);

/* How to pass arguments in Functions */
let strGreeting='Mambo vipi?'

function fAcceptArgument(strSalaamz){
    console.log(`${strSalaamz} + \n Hali ya kushinda?`);
};

fAcceptArgument(strGreeting); 

/* NOTE: To pass MULTIPLE ARGUMENTS, just add a coma. For instance, function fAcceptArgument(strSalaamz,strUgali,strSukumawiki)  */
/*
To create an ALARM that would wake the user based on the below times. 
Monday - 7 am
Tuesday to Thursday - 4 am
Friday - 9 am
Saturday to Sunday - 9 am
Holiday - SLEEP IN
*/

/* Method 001 - the IF ELSE STATEMENT*/
//let varDay="Saturday";

/* if (varDay==="Monday")
    console.log("On Monday wake up at 7 am");
else if (varDay==="Tuesday")
    console.log("On Tuesday wake up at 4 am");
else if (varDay==="Wednesday")
    console.log("On Wednesday wake up at 4 am");
else if (varDay==="Thursday")
    console.log("On Thursday wake up at 4 am");
else if (varDay==="Friday")
    console.log("On Friday wake up at 9 am");
else if (varDay==="Saturday")
    console.log("On Saturday wake up at 9 am");
else if (varDay==="Sunday")
    console.log("On Sunday wake up at 9 am");
else 
    console.log("It's a holiday - SLEEP IN!"); */
//end if */


/* Method 002 - the IF ELSE SHORTHAND STATEMENT using LOGICAL OR OPERATORS*/
/* let varDay="Thursday";
 */
/* if (varDay==="Monday")
    console.log("On Monday wake up at 7 am");
else if (varDay==="Tuesday" || varDay==="Wednesday" || varDay==="Thursday")
    console.log("On " + varDay + " wake up at 4 am");
else if (varDay==="Friday")
    console.log("On Friday wake up at 9 am");
else if (varDay==="Saturday" || varDay==="Sunday")
    console.log("On " + varDay + " wake up at 9 am");
else 
    console.log("It's a holiday - SLEEP IN!"); */
//end if

/* Method 003 - the SWITCH METHOD*/
let varDay="Sunddday";

switch(varDay){
    case 'Monday':
        console.log("On Monday wake up at 7 am");
        break;
    case 'Tuesday':
    case 'Wednesday':  
    case 'Thursday':
        console.log("On " + varDay + " wake up at 4 am");
        break;
    case 'Friday':
        console.log("On Friday wake up at 9 am");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("On " + varDay + " wake up at 9 am");
        break;
    default: console.log("Its a HOLIDAY - SLEEP IN");
        break;
}
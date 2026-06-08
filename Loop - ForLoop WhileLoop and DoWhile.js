/* BEST PRACTICE; WHEN YOU KNOW THE STARTING POINT AND ENDING POINT OF A PROCESS - GO WITH FOR LOOP */
/* BEST PRACTICE; WHEN YOU KNOW WHEN TO STOP, ie the condition to use but not the Start or End, use a While Loop */


/* Repeat the below statement as requested */
/* In order to perform a loop correctly, 
an Initialize Counter is needed, 
a Condition must be evaluated as well as 
an increment included */

/* A WHILE LOOP FIRST CHECKS THE CONDITION BEFORE PROCEEDING. HENCE IT CAN OPT OUT IF THE CONDITION HAS NOT BEEN MET - ie IT WILL NOT EVEN PRINT ONCE. */

//let iCounter=1;                   /*<-----The Initialize Counter */

//while (iCounter<=5){             /*<-----The Condition */
    //console.log("Hello");
    //iCounter++                  /*<-----The Increment Counter, ie iCounter=iCounter+1 */
//};

/* Example 001 - A While Loop*/
/* A WHILE LOOP WILL OPT OUT IF THE CONDITION HAS NOT BEEN MET - ie IT WILL NOT EVEN PRINT ONCE. */

//let iCounterB=10;                   /*<-----The Initialize Counter */

//while (iCounterB<=5){             /*<-----The Condition */
//    console.log("Mambo Vipi");
//    iCounterB++                  /*<-----The Increment Counter, ie iCounterB=iCounterB+1 */
//};

//console.log("Loop opted out!");


/* Example 002 - Do While Loop */
/* A DO WHILE LOOP WILL PRINT ONCE AND THEN OPT OUT IF THE CONDITION HAS NOT BEEN MET */

//let iCounterC=10;                   /*<-----The Initialize Counter */

//do{             
//    console.log("Mambo Vipi - Do while Loop");
//    iCounterC++                  /*<-----The Increment Counter, ie iCounterB=iCounterB+1 */
//}while(iCounterC<=5);           /*<-----The Condition */


/* Example 003 - For Loop*/
/* When there's a need to run a loop THROUGH A PREDEFINED SET OF ITERATIONS, then a For loop is needed */                
//let iCounterC=1;               /*<------- The Initialize */
//for (;iCounterC<=5;){         /*<------- The Condition */              
//    console.log("Mambo Vipi - For Loop"); 
//    iCounterC++;               /*<------- The Increment */
//};

/* NOTE: ALL 3 CONDITIONS CAN BE PUT ON ONE LINE AS BELOW */
/* Example 003B - For Loop*/
//for (iCounterC=1;iCounterC<=5;iCounterC++)
//{
//    console.log("Mambo Vipi - For Loop"); 
//};

/* Exercise - Iterate to 100 and find all numbers that are divisible by 3 */

for(let varInit=1;(varInit<=100);varInit++){
    if (varInit % 3 === 0)
        console.log(`${varInit} is DIVISIBLE BY 3.`);
    //else
    //    console.log(`${varInit} is NOT DIVISIBLE BY 3.`);
    //end if
};



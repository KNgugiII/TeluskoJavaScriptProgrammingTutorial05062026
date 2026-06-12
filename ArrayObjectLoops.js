/* Arrays utilize 2 types of loops to loop over the items; For In Loop and For Of Loop */

let arrItems=new Array();

/* Fills the arrItems array with values */
arrItems[0]=5;
arrItems[99]=99;

console.log(arrItems);          /* [ 5, <98 empty items>, 99 ] */

/* Prints all the values of the above array ONE BY ONE using the For Of Loop*/

for(let n of arrItems){
    console.log(n);  
};

/* A For in Loop helps in getting all the keys of the array elements - an ARRAY is STILL AN OBJECT hence the application of this loop*/

for( let key in arrItems){
    console.log(key);
};                                  /* Prints 0 and 99 as all the other keys are undefined */

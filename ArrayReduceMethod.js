/* Its very much possible to add all the numbers of an array at once, ie to map and reduce or condense the values into one single value*/
/* For instance, the below script reduces all even numbers in the array into a single value */

let arrValues=[36,45,67,88,101]

/* The map method will double all values that it receives */

let varResult= arrValues.filter(n => n%2 === 0)
        .map( n => n * 2)
        .reduce((a,b) => a + b);

        console.log(varResult);
        
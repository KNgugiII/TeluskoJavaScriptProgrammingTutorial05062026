/* Its very much possible to modify values in an array before sending them further along for repeat iterations if they pass the desired conditions*/
/* For instance, the below script filters all EVEN numbers before printing them */

let arrValues=[36,45,67,88,101]

/* To print each element of the array individually, we'll use the For Each method of the array */
/* The map method will double all values that it receives */

    arrValues.filter(n => n%2 === 0)
        .map( n => n * 2)
        .forEach((n) => {
            console.log(n);
        });
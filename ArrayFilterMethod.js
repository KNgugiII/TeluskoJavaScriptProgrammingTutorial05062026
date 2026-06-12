/* Its very much possible to filter values in an array before sending them further along for repeat iterations if they pass the desired conditions*/
/* For instance, the below script filters all EVEN numbers before printing them */

let arrValues=[36,45,67,88,101]

/* To print each element of the array individually, we'll use the For Each method of the array */

    arrValues.filter(n => n%2 === 0)
        .forEach((n) => {
            console.log(n);
        });
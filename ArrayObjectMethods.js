/* Array Methods include PUSH, POP, SHIFT and SLICE  */

let arrTestResults=[5,7,12]

console.log(arrTestResults.push(13));         /* PUSH: Appends New Elements to the end of the array & Returns the new length of the array*/

console.log(arrTestResults);

console.log(arrTestResults.pop());              /* POP: Using the LIFO (Last In First Out stack)Removes the last element from an array and returns it, in this case, its 13 as it was added last */  

console.log(arrTestResults.shift());              /* SHIFT: Shifts the elements to the LEFT, ie begining and thereby Removing the first element from an array and returns it, in this case, its 5 is the first and it would be removed */  

console.log(arrTestResults.unshift(99));              /* UNSHIFT: Inserts new elements at the start of an array and returns the new length of the array, in this case, 99 is added at the front of the array */  

/* Pads numbers to the end of the array so that the Slice Example can make sense */
arrTestResults.push(98);
arrTestResults.push(263);
arrTestResults.push(73);
arrTestResults.push(1);

console.log(arrTestResults);

console.log(arrTestResults.splice(2,3));              /* SPLICE: Removes elements from an array and if necessary, inserts new elements in their place, returning the deleted elements - hence the final retained array section will be 99,7,73,1

NOTE: With this SPLICE Method, you can add numbers as you delete them*/  


console.log(arrTestResults);

console.log(arrTestResults.splice(1,1,44,9999));              /* SPLICE: NOTE: With this SPLICE Method, you can insert new elements in the place of the deleted elements - the retained section will thus be 99,44,99,73,1*/  

console.log(arrTestResults);
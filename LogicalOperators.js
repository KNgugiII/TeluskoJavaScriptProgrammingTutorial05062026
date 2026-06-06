/* When you want to COMBINE 2 COMPARISONS and then based on those 2 comparisons you want to ge the final value, you use LOGICAL OPERATORS which are as follows;

And - &&
Or - ||
Not - !

*/

/*
let varX=7
let varY=8
let varZ=9

NOTE: The above variables can be written in one line and separated using commas as follows,
let varX=7, varY=8, varZ=9
*/

/* Example001 - And && */

let varX=7, varY=8, varZ=9

let varResult=varX < varY && varX < varZ

console.log(varResult)          /* IF BOTH COMPARISONS ARE TRUE, the end result is TRUE */

/* Example002 - And &&*/
let varM=7, varN=8, varP=5

let varResult001=varM < varN && varM < varP

console.log(varResult001)          /* IF ONE OF THE COMPARISONS IS TRUE & the other isn't, the end result is FALSE */

/* Example003 - OR ||*/
let varM001=7, varN001=8, varP001=5

let varResult002=varM001 < varN001 || varM001 < varP001

console.log(varResult002)          /* IF ONE OF THE COMPARISONS IS TRUE & the other isn't, the end result is TRUE */

console.log(!varResult002)          /* The EXCLAMATION MARK 'And NOT' RESULTS IN THE OPPOSITE OF WHAT WOULD HAVE BEEN EXPECTED, IT'LL SHOW FALSE */
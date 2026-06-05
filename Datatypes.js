/* There're 2 types of data types - Primitive and Object */
/* Primitive datatypes include strings, numbers, booleans, null, undefined, symbol*/

/* Example of a STRING DATATYPE */
let varFirstName='Kennedy'
let varLastName='Ngugi'

console.log(typeof(varFirstName + " " + varLastName))   /* Typeof will inform of the data type */

    /* ESCAPE CHARACTERS IN STRINGS */
    /* For instance, if the desire is to get double quotation airbags in a string, do as below; */
    let varUserName='Kennedy Ngugi "-The Internet Merchant"'
    console.log(varUserName)

    /* The above can also be WRITTEN as below using ESCAPE CHARACTERS */
    let varUserName001="Kennedy Ngugi \"-The Internet Merchant001\""
    console.log(varUserName001)

    /* To push extra content onto a NEW LINE, use the \n ESCAPE CHARACTER */
    let varUserName002="Kennedy002 \nNgugi002"
    console.log(varUserName002)

    /* To push extra content some distance using the tab, use the \t ESCAPE CHARACTER */
    let varUserName003="Kenn\tedy003 Ngugi003"
    console.log(varUserName003)

/* Example of a BOOLEAN DATATYPE */
let varBool=5>6

console.log(typeof(varBool))

/* Example of a NUMBER DATATYPE */
let varNum=80

console.log(typeof(varNum))

/* NOTE: decimal point numbers are known as Floating Point Representation */
/* NOTE: There're some pretty big values in their billions are they are known as bigINT */
/* NOTE: We can also store other types of number formats in number data types, for instance; decimal,binary and octal and even hexadecimal values and even exponential values */
/* NOTE: When the number values are big, you're ONLY supposed to use _ 'underscores' to separate the values and not ,'commas' for instance, let varNum=123_456_987_456 */
/* NOTE: There're also INFINITY NUMBERS which can either be positive or negative. Its gotten by dividing a number with 0 */
/* Example of an INFINITY NUMBER */
let varInfinityNum=5/0
console.log(varInfinityNum)     /* Outcome - POSITIVE INFINITY */

/* NOTE: You can't MIX bigINT with other numbers - type conversion needs to happen */

/* Example of an NULL DATATYPE*/
/* NOTE: BE CAREFUL WHEN USING NULL in Javascript  - Its meant to show that something doesn't exist but when you check its type - it shows OBJECT - HOW? Must be a bug*/
let varNull=null
console.log(typeof(varNull))


/* Example of an UNDEFINED DATATYPE, ie variable hasn't been defined */
let varUndeFined    /* Left AS IS */
console.log(typeof(varUndeFined))





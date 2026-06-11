/* Functions in Objects are called METHODs, ie that action an OBJECT undertakes */

/* Part001 - an Object with a Method, aka FUNCTION*/

let objLaptop={
        RAM:4,
        CPU:'i5',
        Brand:'HP',

        /* See the Function below; */
        Greetings:function(){
            return 'Hello World'
        },
};

/* To print Specific Properties, please see below; */
console.log(objLaptop.Brand);
console.log(objLaptop.CPU);

/* To run the Specific Method, please see below; */
console.log(objLaptop.Greetings());


/* To assess if Arrow Functions can work in Methods */
let objLaptop233={
        RAM233:4,
        CPU233:'i5',
        Brand233:'HP',

        /* See the Function below; */
        Greetings233:() => 'Hello World',
};

/* To print Specific Properties, please see below; */
console.log('The Brand is ' + objLaptop233.Brand233);
console.log('The CPU is ' + objLaptop233.CPU233);

/* To run the Specific Method, please see below; */
console.log('The Method is ' + objLaptop233.Greetings233());

/* OBSERVATION: Arrow Functions work as expected in Method Functions */

/* NOTE: Multiple Methods can be included in an OBJECT */

/* Parameter Arguments can also be included in said functions */
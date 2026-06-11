/* Arrays can be created in 2 methods */

/* (1) The Constructor Method, ie use of the NEW keyword */

let arrValue=new Array();       /* The NEW Keyword illustrates that we are creating a NEW keyword */

console.log(arrValue); /* At this point, the ARRAY is EMPTY */

/* To add values to the array, use the PUSH keyword as below; */
arrValue.push(4);
arrValue.push(7);

console.log(arrValue); /* At this point, the ARRAY is has 2 values */

/* ALTERNATIVELY, ONE CAN ADD values to arrays as below */
arrValue[2]=91;
arrValue[3]=88;

console.log(arrValue); /* At this point, the ARRAY is has 4 values */

/* (2) The Curly Brackets Method */
let arrValue001=[];

/* To add values to the array, use the PUSH keyword as below; */
arrValue001.push(41);
arrValue001.push(70);
arrValue001.push(34);
arrValue001.push(7);

console.log(arrValue001); /* At this point, the ARRAY is NOT EMPTY, it has 4 values */

/* To FETCH SPECIFIC NUMBERS from the array, do as below; */
console.log(arrValue001[0]);       /*NOTE: Indexes in arrays are Zero Based */
console.log(arrValue001[1]); 
console.log(arrValue001[2]); 
console.log(arrValue001[3]); 

/* Array Properties */

console.log(arrValue001.length);        /* Calculates the number of elements in the array */
console.log(arrValue.length);        /* Calculates the number of elements in the array */


/* NOTE: ARRAYS CAN HOLD DIFFERENT DATA TYPES, ie string, numbers, objects, functions etc. Please see below; */

let arrData=new Array();

console.log(arrData);               /* At this point, arrData should be EMPTY */

/* To ADD DIFFERENT DATA TYPES, please see the below; */
arrData.push('Kennedy');            /* A string */

arrData.push(1299);                 /* A number */

arrData.push(objCity={              /* An Object */
    Name:'Nairobi',
    Size:'696.1KM Sq',
    IsCapitalCity:true,
});

arrData.push(function fSendGreetings(){         /* A Function */
    console.log('Afternoon');
});


console.log(arrData);               /* Prints the items in the array */
console.log(arrData.length);                /* Displays the number of items in the array */

/* To Fetch the value of the function in the array, do as below; */
/*First, you have to locate its Index and then call it using the () brackets */
arrData[3]();

/* To Fetch the value of the function in the Object, do as below; */
console.log(arrData[2]);
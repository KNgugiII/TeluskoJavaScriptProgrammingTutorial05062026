/* Objects represent real entities in the real world. For instance, a bank account, a person, a car, a laptop - ALL WITH THEIR RESPECTIVE PROPERTIES & Methods etc. */
/* One method of creating objects is by using Object Literals, ie literally stating all the properties of an object, height, weight, color etc! */

/* Part001: Create a Developer Object! */

let objDeveloper={};                /*<----This object DOESN'T have ANY PROPERTIES*/

console.log(typeof (objDeveloper));         /*<----At this point, its defined as an object */

/* Part002: Defining the properties! */

/* These are added as Key Value pairs that are separated with a colon. Additional properties can be added by including a comma as below */

let objDeveloper001={
    Name:'Kennedy',
    Age:36,
    Tech:'Javascript',
    'Coding Level':'Amateur',
};

console.log(objDeveloper001);       /* Prints all the properties in the object */

/* To print specific properties, I need to use the dot operator as below; */
console.log(objDeveloper001.Name);
console.log(objDeveloper001.Tech);
console.log(objDeveloper001.Age);

/* Square brackets can be used to display the properties, if there're property names separated by a space between them as below;*/
console.log(objDeveloper001['Coding Level']);

/* Part003: Creating COMPLEX OBJECTS - these are objects which have been nested into others! */
let objStudent={
    Name:'Ngugi',
    Tech:'JavaScript',
    ObjLaptop:{         /*<------This represents the Laptop Object */
        RAM:4,
        CPU:'i5',
        Brand:'ASUS'
    }
}

console.log(objStudent);    /*<------This prints the Student object with its respective properties */     


/*<------To get SPECIFIC properties in the object, I'll use the DOT OPERATOR AS BELOW */     
console.log(objStudent.Name);    
console.log(objStudent.Tech);

/*<------To DRILL DOWN FURTHER INTO THE LAPTOP OBJECT, I'll still use the DOT OPERATOR AS BELOW */     
console.log(objStudent.ObjLaptop.Brand);    
console.log(objStudent.ObjLaptop.CPU);

/* To delete properties in Objects, one uses the JS Delete key word as below */

let objVehicle={
    Model:'Tesla',
    YOM:2022,
    Drivetrain:'Front-Wheel Drive (FWD)',
    'Fuel Transmission': 'Manual',
    'Fuel Type': 'Electric',
    'Safety Features': 'Anti-lock Braking Systems (ABS)',
}

console.log(objVehicle);        /* Displays the vehicle properties */

console.log(objVehicle["Fuel Transmission"]);       /* Displays the ONE of vehicle properties */

/* DELETES ONE OF THE OBJECT PROPERTIES */
delete objVehicle['Fuel Type']


console.log(objVehicle);        /* Fuel Type property has been deleted as can be seen here */

/* Part004: Looping through objects using the For In Loop! */

/* To loop through the Student Object, please see the below; */

for(let itemObj in objStudent.ObjLaptop){
    console.log(itemObj, objStudent.ObjLaptop[itemObj] );
}; 
 // this is a comment
 console.log('Hello World. From separate File');
 let interestRate = 0.4;
 interestRate = 1;
 console.log(interestRate);
 const FIXED = 4;

 // Types

 let name = 'hassan'; // String
 let age = 28; // Number
 let married = true; // Boolean
 let firstName; // undefined
 let childName = null; // null

 console.log(typeof name); // string
 console.log(typeof age); // number
 console.log(typeof married); // boolean
 console.log(typeof firstName); // undefined
 console.log(typeof childName); // object

 let person = {
     name: 'Hassan',
     age: 32
 };

 console.log(person);

 // Dot Notation
 console.log(person.name);

 // Bracket Notation
 console.log(person['age']);

 let colors = ['red','blue'];
 colors[2] = 'green';

 console.log(colors);        // ['red','blue','green']
 console.log(colors.length); // 3 
 console.log(colors[0]);     // red
 console.log(typeof colors); // object

 function greet(name){ // 'parameter'

     console.log('Hello '+ name);
 }

 greet('hassan'); // send 'argument'
 greet('toma');

 function square(number){
     return number * number;
 }

 console.log(square(3));

 // Factory Function

 function createCircle(radius){
     return {
         radius,
         draw(){
             console.log("draw complete. Radius:" +this.radius);
         }
     }
 }

 let circle1 = createCircle(1);
 circle1.draw();

 
 let circle2 = createCircle(2.5);
 circle2.draw();

//Constructor function 
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw complete. Radius:" +this.radius);
    }
}

const circle3 =  new Circle(1);
circle3.draw();

// Iterating properties of an object
for(let key in circle3){
    console.log(key,circle3[key]);
}  
// Iterating property keys of an object
for(let key of Object.keys(circle3)){
    console.log(key,circle3[key]);
}
// Iterating entries[key,value] of an object
for(let entry of Object.entries(circle3)){
    console.log(entry[0],entry[1]);
}
// property checking in an object
if('draw' in circle3){
    console.log("draw exists");
}

// Clone using assign function and source object
let another = Object.assign({},circle3);
console.log(another);
// Clone using assign function with initial and source object
let another2 = Object.assign({ color:'red' },circle3);
console.log(another2);
// Cloning with 'spread' operator
let another3 = { ...circle3 };
console.log(another3);

name ='chapal';
// Template literals
let email = 
`Hi ${name},

I Hope You are well. How is everybody?

Yours,
John`;
console.log(email);

// set to current date time
let now = new Date();
let date1 = new Date("Dec 11 2019 20:00");
let date2 = new Date(2019,11,11,16);
console.log(date2.toDateString());
console.log(date2.toTimeString());
console.log(date2.toString());
console.log(date2.toLocaleString());
console.log(date2.toISOString());
console.log(`${date2.getDate()}-${date2.getMonth()+1}-${date2.getFullYear()}`);




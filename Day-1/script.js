//alert pop-up 
// alert("hello world");


//variables
var a = 5;
let b = 6;
b = "hello world";
const c = 7;
// let d = 5, e = 6, f = 7;     we can declare in that way also
let d = 5;
let e = 6;
let f = 7;

//variable names
//should start from alphabets, _ or $
// can contain alphabets, special characters and numbers*/
//reserved words can't used as variable.
//name should be meaningful 

let name = "Ritvik";    //string 
let isNight = true;     //boolean
let speedoflight = 3*10*8;   //it is big number so we can use BigInt
let BigInt = 299792458;     //it is uses for big numbers
let city;   //undefined variable
let criminalrecord = null;   //null keyword

//Objects
let Ritvik = {age: 22, name: 'Ritvik', isNight: true};
let user = {city: 'bhopal', isNight: true};

let person = [Ritvik, user];    //Array

console.log(Ritvik);

console.log(person);


let x = 4;
 x=3; //allowed

// let x = 5;  //not allowed
if(x){   // allowed
    x = 5
}

// if(a){
//     let a = 10;
// }
console.log(x)

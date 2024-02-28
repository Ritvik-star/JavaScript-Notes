let a = 5, b = 8;

let isAgreaterThanB = a > b;
console.log(a >= b);

//equality check
let c = 6;
let d = '6';
console.log('loose equality check', c == d);    //not recommended
console.log('strict equality check', c === d);  //recommended

//type coerction
let x = d + a + c + b;
console.log('x', x);
console.log("undefined and null loose equality", undefined == null);
console.log("undefined and null strict equality", undefined === null);

// //if else
// if(a > b){
//     console.log("a is greater than b");
// }else if(a == b){
//     console.log("a is equal to  b");
// }else{
//     console.log("a is less than b");
// }

// if(a){
//     console.log("a", a);
// }
// let z;  //undefined
// if(z){
//     console.log("z",z); //it will not print bcoz z is undefined (false)
// }
// //0 , undefined, null, Nan, empty string all are falsy values

//Nullish coalescing operator
let aORb = (a || b);
console.log("aORb", aORb);
let cANDd = (c && d && a);
console.log("cANDd", cANDd);


// let age = prompt("enter your age") > 18;
// console.log("age",age);

// let numberOfCrimes = Number(prompt("enter number of crimes")) ?? 5; //Nullies op.
// console.log("crimes", numberOfCrimes);
// a ?? b => a if not undefined or null, else b

/*
// //while loop
// while(condition){
//     //keep doing something
// }

// do{
//     //keep running
// }while(condition);


// //for loop
// for(begin; condition; step){
//     //loop body
// }
// */
// //e.g.
// for(let i = 0; i < 5; i++){
//     console.log("i", i);
// }

// //break --> uses to break loops
// //continue --> uses to continue the loop or skipping a statement
// //e.g.

// //switch statements
// switch(c){
//     case 1:
//         console.log("c === 1");
//         break;
//     case 6:
//         console.log("c === 6");
//         break;
//     case 5:
//         console.log("c === 5");
//         break;    
//     default:
//         console.log("c is not found");
//         break;    
// }

// switch(true){
//     case(5 > 6):
//         console.log("true");
//         break;
//     case(5 === 5):
//         console.log("equal");
//         break;
//     default:
//         console.log("nothing");
//         break;
// }


//Functions
// function addNumbers(a, b){
//     let c = a+b;
//     return c;   //returning is always must
// }
// console.log(addNumbers(1, 2));

// function subNumbers(a = 4, b = 2){  //passing values  defaultly
//     let c = a - b;
//     return c;
// }
// console.log(subNumbers());

// function applyFunction(fn, a, b){
//     return fn(a, b);
// }

// console.log(applyFunction(addNumbers, 7, 8));

// let result = function(a, b){    //function as value
//     return a - b;
// }
// console.log(result(2, 1));

// //Arrow function
// const multipleNumbers = (a, b) => a*b;
// console.log(multipleNumbers(5, 6));

//hoisting
i = 9;
console.log("I", i);
var i;


console.log(show());
function show(){
    return "Hello"
}

// var z = 6;  //global variable

// function addNumbersAndSquare(z, b){ //parent function
//     var exponent = 2;   ////local variable
//     var z = 5;  //local variable
//     console.log(z);
//     function exponent(c, d){    //nested function
//         var z = 4;
//         return c ** d;
//     }
//     return (z+b) ** exponent;   
// }
// console.log(addNumbersAndSquare(2,4));
// console.log(z);


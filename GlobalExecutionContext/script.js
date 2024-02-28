// getName();
// x = 7;
// console.log(x);

// var x;
// function getName(){
//     console.log("good morning");
// }    //example of Hoisting 


//example of function invokation and variable environment and how it works.
// var x = 1;  //first of all Global execution context will created when it's execution starts
//             //and then 'x' get it's memory allocation inside MC phase or variable environment and other function also 
//             //get their memory allocations
//             //after that again execution will start from starting and now x will get it's value 'x = 1'
    
// a();         //now controls moves on next line , here function invokation is happening which another functional execution context will create inside GEC
//             //and also it will pushed inside the CallStack
//             //and simillarly it will work so on
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

//#1

let car = {
    name : "AudiQ7",
    sayName(){
        console.log(this.name);
    }
}

let sayName = car.sayName;  //here we are just trying to get the output from method of object in a variable
sayName();                  //which is another concept of javascript known as object destructing 
//so output of this is 'undefined'
//because we are not invoking our function properly wiht parenthesis so 
//that's why EC will not created and nothing gonna executed


//#2
function greet(person){
    if(person === {name:"Ritvik"}){
        console.log("hey Ritvik");
    }else{
        console.log("wrong name");
    }
}
greet({name:"Ritvik"});
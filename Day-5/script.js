//calling function as normally
function normalFunction(){
    console.log("Normal function execution");
}
normalFunction();

//IIFE (immediately invoked function execution)
(function() {
    console.log("immediately invoked function execution");
})();   //here we are calling function immediately 


//Callback function

//this is the normal way , which we used to call other functions
function myfunct1(){
    console.log("first function");
    return 5;
}

function myfunct2(res){
    console.log("second function");
    return res + 10;
}

let res = myfunct1();
let sum = myfunct2(res);
console.log(sum);
//but this way have some drawbacks like
//function dependancy
//both function will invoked for sure - even when we don't want both
//so to overcome with these drawbacks we have Callback approach

//Callback example  
//instead of passing function seperately, we will pass function as argument


function myfun1(myfun2){
    let x = 5;
    return myfun2(x);
}
                                         
function myfun2(y){
    return y * 2;
}
let show = myfun1(myfun2);
console.log(show);

//we can use callback function as argument in all methods of array
//also can use in case of asyncronous operations
//e.g. if you are performing APi calls which is asyncronous operations
//and wants to allow that current function can run until APi not called then
//we can use callback function



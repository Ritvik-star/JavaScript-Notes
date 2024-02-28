//Asyncronous operation
//Those operations which never waits for another operation to get update/run
//they runs in behind and they can be run multiple times at a time.e.g.
 

// setTimeout(function(){
//     console.log("timeout get executed");    //this will execute second
// }, 3000);
// console.log("hello");   //this will get execute first


//more example for async op.-
//Api calling
//file handling
//script loading etc.

//Promises 
// this is the facility or feature provided by js which uses to handle async operation.
//In lame langauge we can say if we provide any promise to any method or to anything so that 
//method will not execute or wait till the execution of given promise is not done.

//It contains few imp. states-
// #1) Pending - It occurs when promise is still in progress(neither fulfilled or not rejected)
// #2) Fulfilled - means, it is successfully completed(resolved promise)
// #3) Rejected - means, Error occurs in your promise and got rejected.
// #4) Settled - means, either it got fulfilled or rejected.

//now every states has result-
// pending - undefined
// fulfilled - resolved(result will come from async operation)
// rejected - error

//.e.g
let result = new Promise(function(resolve,reject){
    // setTimeout(() => {  //async operatioon
    //     // resolve("promise is resolved.");
    //     reject("promise is rejected.");
    // }, 3000);

    setTimeout(()=>{
        let x = 5;
        if(x > 1){
            resolve("promise is resolved.");
        }
        else{
            reject("promise is rejected.");
        }
    },3000)
})

console.log("wait 3 seconds for response");

async function myfunc(result){
    const res = await result;
    console.log(res);
    console.log("same execution with async/await as we did in then/catch");
}
myfunc(result);

// result.then(function(onSuccess){
//     console.log("got the response : ", onSuccess);
// }, function(onError){
//     console.log("got the respone : ", onError);
// })
//above way is the old way to get promise response

//below is new way
// let checkPending = result.then(function(onSuccess){
//     console.log("got the response : ", onSuccess);
// }).catch(function(onError){
//     console.log("got the respone : ", onError);
// });
// // .catch is introduced in ES6 to get and show the response when promise got rejected.

// this is how we can check pending state of our promise
// console.log(checkPending);  //to check pending state

//async / await



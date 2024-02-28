//Node Js
// it is run time Js environment to exeute js code outside the browser and used for server side development
//written on c++
//every browser has there seperate environment like Ms edge - chakra, mozila - spiderMonkey, chrome - v8
// so if I try to run js code on V8 then it will work fine but if i will try to run it on other environment then it might fail
// so to resolve this NodeJs came into the picture
//Node js supports all V8 js enviroment feature along with some extra module like http, fs, os etc. to perfome some server side ops.
// -> it is ideal for building Highly scalable, data intensive and real time
 		// applications or Input-output applications.





                //  *****Why Node JS ?

                //  ->It is easy to get started
                //  -> fast and Highly scalable (because of its non-blocking async architechture)
                //  -> It uses JS (so need to learn any another new programming language)
                //      if you know js
                //  -> It provides large eco-systems of open soure libs
                //      so no need to build everyting from scratch.
            
                
                //  -> It use event queue to perform async op.        




//how it works
//..e..g....
//best real life example is a vaiter in resturant

//It works based on it architechture in which basically
//it will be having some imp things like event queue, event loop (which uses single thread for async), 
// server (db), thread pool(it contains multiple threads/workers according cpu's core count) for blocking/sync
//requests...

//so hows it works together, .e.g....
//whenever a request comes from client then first it goes to event queue
//then event loop identifies request -

//if request is async/non-blocking request
        //then single thread will come into picture and it will pick that async request
        //and proccess it for further to server, 
        //meanwhile req-1 is proccessing, single thread will not wait, it will go for another request if there is.


//if request is sync/blocking request
        //then event loop will push that request into thread pool
        //where multiple thread will be available based on the core count of machine
        //in thread pool, one avaiable thread will allocate to request and that thread will work for the request
        //and meanwhile, if there will more blocking request then thread pool will alocate any other 
        //free thread to new request because thread-1 was blocked for request-1


//and that's how it works and that's why nodeJs is ideal for i/o operations and scalable.
//because by default NodeJs works in async/non-blocking way.


// console.log(window);
//it will give an error like window is not defined because 
//window object is exists in browser environment like V8 but 
//in node js we have other modules or object to perfome file, os, networking operations.


//sync and async functions in nodejs

//sync funtions-> these are the API functions which used for blocking code, 
                    // blocking code means that block the execution of the programm whenever operation is perfomed 
                    //and fist it will perform one operation and till that time it will stop or block the other execution



//Async API function -> these are the api functions which used for non blocking code.
                    //non - blocking code means that whenever we perform any operation using them then they will not block
                    //any other statement or operations execution it will start first execution and then meanwhile 
                    //it will go to second one but will not wait to done first                    


//Modules
//modules are something which we can used in single file or collection of multiple files
//in Nodejs every single file treated as a separate module
//e.g. if we defined any function or any object so that will be in window object 
// and if in future we defined same name function in some another file in window then it will be overwrite
// because both are in window object, so to make them priavte or to redue there complexity we uses modules
// such are http, fs, Os, path etc


//Midlerwares
//middlewares are those function which comes between request and response cycle
//so whenever any request received by the server then middleware will execute 
//in case if we wanna performe any sepcific operations for that request and then
//before controller sends the response it will execute completely.

//most famous is Express js which used for handling different routing of multiple webpages


//To handle async concurency NodeJs use Libuv library which basiclly creates a
//thread pool in which many thread will be there to perform or handle async operations


//control flow functions
//this function executes when any async function call happens
//these function define the order of async functions.


//event loop
//event loop is something which used to perform non-blocking or async operations
//it takees requests and proceesses it and if it will get another on same time then it puts that request
//in event queue and it will keep on eye on queue, whenever the event will be ready it will process it
//we can say its a endless loop which never sleep


//order of control flow
//execution and queue handling
//collection of data storing
//handle concurrency
//next line code run


//repl
//read, evaluate, print and loop
//it is a environment shell likewise cmd
//where we can write and debugg the code


//require module
//we use it to import external lib 
//and assign to any variable and then can access methods of that module by using dot notation



//write hello world using nodejs
// const http = require('http');
// http.createServer((req, res)=>{
//     res.write("hello world");
//     res.end();
// }).listen(3000)

// const http = require('http');
// http.createServer((req, res) =>{
//     res.write("hello world");
//     res.end();
// }, listen(3000))




// console.log(window);    //error: window is not defined
//because it is an browser object

//In node we have global obj, 

// we will get the some js objects like
//setTimeout, SetTimeinterval, clearTimeout, clearInterval..
// and it will contains some of its own
console.log(global);

var msg = 'hey';
//but if we create any variable or method then it will not go in gloabl object
//because of node modularity concept
// console.log(global.msg);    //undefined

//so we have to manually export it or import it to treat it as module.

//custom module

const log = () =>{
    console.log("logging...");
}
module.exports.log = log;




//NodeJs Vs Ajax
//Node is a Js run time environment which runs on server side
//Ajax is a programming language which runs on client side or on browser




//Event-Driven Programming
//It is used to synchronize the occurance of multiple events and also used to make the programm
//simple as much as possible.
//the main components of event-driven programming are -
//1. Callbacks  (these are event handlers which called whenever event got triggered).
//2. Event loop (it listen the event triggeres and then correspondingly it will call the event handler/callback)



//Buffer class
//it is a class in nodejs, which is used to work on binary data in node Js.
//it is similar as array but unlike array it can't be resize or can't take multiple data type element
//in it.


//Streams
//these are the data handling methods which use to read or write input-output data and
//exchanging information in efficient way.
//it provides stream apis to work on and
//there are four type of streams. 

//1. Readable Stream :-
    //this stream is used to recieve and read the data and it is not allowed to write/send anything by using
    //readable stream in specific order.
    //.e.g...
            //fs.createReadStream()     -> it will allow us to read the file content

//2. Writable stram :-
    //this stream is used to write the data and allows us to send it but not allow to receive it back
    //.e.g...
            //fs.createWriteStream()    ->it will allow to write data in file
            
            
//3. Duplex stream :-
        //this is stream allows us to read and write means send in and receive it back
        

//4. Transform stream :-
        //this stream is duplex in nature and also allows us to transform or modify the data while
        //.e.g.... gzip is used to compress the data. 


    
    
//callback hells
//whenever we creates/calls a callback inside another callback and again call a callback inside it
//so it will be nested callbacks which forms a pyramid of callbacks and it will very less readable and hard to
//debug or maintainable and this situation we called as callback hell
// and to overcome with this Js introduced Promises


//setImmediate Vs setTimeOut

//setImmediate     -> it is used to execute perticular script immediately
//setTimeout     ->it is used to hold other function and execute it after specified time period




//Spawn() Vs fork()

//both are similarly used to create child processes but the difference is 
//how they run -

//spawn()       ->it will create a new function that will run by command line
                // child_process.spawn()

//fork()        ->it will create an instance of existing fork() and also creates worker to work on.
                //child_process.fork()
//In NodeJs fork is a method that is used to create child process and it handles the increasing work load
//it creats new functions of engine that enables multiple to run the code.


//callback hell avoid by using -

//1. generators methods -
        //generators are the methods in Nodejs which uses * after function keyword and 
        //it can pause the execution and will return an iterator which can resume its execution from where it left
        //.e.g...

        // function* generators(){
        //     yield 'hello';
        //     yield 'world';
        // }   
        // // yield is a keyword which uses to pause the execution

        // const iterator = generators();
        // console.log(iterator.next().value); //hello
        // console.log(iterator.next().value); //world

        //by using .next().value we can get the next yield value from generator




//2. Promises

    // function abc(){
    //     return new Promise((res, rej)=>{
    //         if(true){
    //             res();
    //         }else{
                //    rej()     
                //}
    //     })
    // }


//3. using async and await





//Rest API

//it stands for Representational state transfer application programming interface
//it is architechture and simple way to access the web apis which comes by request of client side
//in form of web services like http.get, post, put and delete and then it goes to server and returns
//the response in form for resource formats like html, xml or json.
//Json format is the most famous one.




//http requests

//Get -> it use to get/retrived the data from server, status code 200 if successfull retreived data

//post -> it use to add or post new data on server, on success http code 201

//put -> it use to update/edit the data on servver with payload body object
        //if request match with resource then it will update with it
        //otherwise it will create new resource like post

//delete -> to delete the data on server on spified location




//Redis

//it is an open source store, in which we can store data structures like strings, arrays, streams 
//it can be used in multiple ways like database or cache object
//and it reduce the cache size which makes the apps more efficient



//web-socket
//it is a protocol which provied the multiway communication between
//client and server and by using this both can sends the message to each other
//easy to implement, most useful in case of Rest ful apis


//util package

//oS, path, dns

//process.env to handle environment variables



// console.log(alert('hey'));



//module design pattern -
        //it is a design pattern used for improving the maintainability and reusability of the code by creating
        // public and private access levels.
        // Sometimes called encapsulation, it protects the value inside a module from being accessed from other scopes.
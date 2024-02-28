//in nodejs every js file is a module 
//module is something by using which we can segregate our code and can keep modularity 
//and seperation between files and modules

//there are many built in mondules in NodeJs like - 
//http  -> by using it we can create a server
//fs
//Os
//path
//crypto
//passport


//custom modules
//by using export and require we can create our custom modules 
//and can be used through out the application

//.e.g...

const math = require('./MathOp');   //it will import all the exported methods/properties
                                    // available in this file/module

console.log(math);

console.log(math.add(2, 4));    //6

console.log(math.sub(2, 4));    // -2
//thats how we can import and access our custom modules by using
//require()



//built in modules

// const http = require('http');   //it will import the http module and asign to http variable
// //and then we can use it later

// console.log(http);




//FS module
//FS stands for file system module and it is use to intract with files in our system
//it is built-in module provided by nodejs, 
//To use it we have to pass it in require() then we will be able to use its
//all methods like
//writeFile(), appendFile(), cpFy(), unLink(), readFile() etc...
//.e.g.


//first import fs module

const fs = require('fs');


//if we want to create new file 
fs.writeFile("./test1.txt", "Hey I'm created by fs.writeFile()", (err)=>{
    console.log(err);   //print error if any error found otherwise null
})

let f2 = fs.writeFileSync("./test2.txt", "Hey, I'm created by fs.wirteFileSync()")
console.log(f2);//undefined

//both writeFile() and writeFileSync() will create a new file if that is not exist already
//if exist then it will overwrite them

//difference
//writeFile()  
//-> it is an async method
//-> it will not return anything
//-> it expects a callback as an argument for handling errors

//writeFileSync()
//->it is sync method
//-> it might return somtheing depends on file
//->no need of passing callback, takes only 2 params, file path and file data




//to read file

let result = fs.readFileSync('./test1.txt', 'utf-8');
console.log(result);

//as this readFileSync() is a sync method so it will return some value



fs.readFile('./test1.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})

//as this readFile() is async method so it will not return anything,
//instead it will take a callback as an argument



//to append 

fs.appendFile("./test1.txt", "hey, I'm Ritvik", (e)=>{console.log(e)});
fs.appendFileSync("./test1.txt", "hey, I'm Ritvik");












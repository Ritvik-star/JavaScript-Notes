//MIDDLEWARES

//Middleware functions are functions that have access to the request object (req),
//the response object (res), and it works between the request-response cycle and 
//so it can change or update the request and can be also used for validation or authentication
//or can also maintain log files of all the coming requests. 

//it will be having next() which will point or move the request to next middlerware (if there is)
//otherwise move to the route.

// Middleware functions can perform the following tasks:

// Execute any code.
// Create log files for maintaing record of requests and responses.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack using next().

//.e.g...

const express = require('express');

const app = express();

const users = require('./MOCK_DATA.json');

const PORT = 4000;
//by using .use() we can implement middlewares

app.use(express.urlencoded({extended: false})); //1st middleware - (builtin middleware)
    //here
    //express.urlencoded is built-in middleware which basically reads or takes the user form input and 
    //put that user data into an object and then we can put that object in request.body in case of POST request
    //or PUT/PATCH requests.


//  use-case-1
//do some changes before next middleware/route  
app.use((req, res, next)=>{
    //get some db query 
    console.log("request entered in first middleware : ", req); //if we will not use next() then the server
    //will stuck in this middleware only will not move forward niether backward


    //so its mandatory to give next() at the end in middleware
    next();
})


//use-case-2
//do some validations or end response from middleware in false validation 

app.use((req, res, next)=>{
    if(req.url=== '/users'){
        next();``
    }else{
        res.end(`URL not found ${404}`);
    }
})


app.get('/users', (req, res)=>{
    res.json(users);
})

app.get('/api/user/:id', (req, res)=>{
    let id = Number(req.params.id); //by default it will come as string so we have to convert it into Number
    let user = users.find((user)=> user.id === id);
    return res.json(user);
})

app.listen(PORT, ()=>{
    console.log(`Server is hosted on : ${PORT}`);
})



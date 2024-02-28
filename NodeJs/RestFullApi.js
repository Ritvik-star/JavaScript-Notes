
//API
//Application Programming Interface
//An API is a set of programming code that enables data transmission 
//from one plateform to another.

//how it works
//The working principle of an API is commonly expressed through the request-response communication between 
// a client and a server.
// The client is any front-end application that a user interacts with.
//  The server is in charge of backend logic and database operations. 
// In this scenario, an API works as a middle layer between the client and the server,
//  making it possible to send data requests and responses.



//There are four different ways that APIs can work depending on when and why they were created.

//SOAP APIs 
//These APIs use Simple Object Access Protocol. Client and server exchange messages using XML.
// This is a less flexible API that was more popular in the past.

//RPC APIs
//These APIs are called Remote Procedure Calls.
// The client completes a function (or procedure) on the server, 
///and the server sends the output back to the client.

//Websocket APIs
//Websocket API is another modern web API development that uses JSON objects to pass data. 
//A WebSocket API supports two-way communication between client apps and the server.
// The server can send callback messages to connected clients, making it more efficient than REST API.




//REST API's
//It stands for Representational State Transfer APIs
//1. those API's which will use http methods to complete the execution of request from client to servers
    //http request methods are -
    //GET, POST,  PUT/PATCH, DELETE...
    //GET (if browser is client,then it is default method of browser)

//2.   those API's which follows server-client Architechture, in which the response will be returned
        //according to the client behaviour or functionality, for example -
        //->   if client is browser then server can send directly response in html formate
        //     (means can do directly SSR (server side rendering)) which will more fast and efficient way
        
        //->   if client is any other device then we can send data/response as JSON (Js Object Notation)
                // and then they can manually convert it into normal object and can use it.  

//so those API's which follows these main best practices then they are REST API's
//this is most popular and used one.



///*** Good practice to build a hybrid server 
//if client is browser then send as html
//if client is any other machine then send as json
//so in this way our server will support all the type of client.


//plan for API

// 1. Plan the API
// 2. Build the API
// 3. Test the API  
// 4. Document the API  
// 5. Market the API 



//1. Plan the API

    //1.    GET /user   = render html docs

    //2.    GET /api/user   = list all user's as json   (for other devices)

    //3.    GET /api/user:id    = get user json based on id(dynamic path parameter {provided by Express Js})
    //4.    GET /user:id    = get user html based on id

    //5.    POST /user  = add new user to the list

    //6.    PATCH /api/user:id  = edit user based on id

    //7.    DELETE /api/user:id = delete user based on id



 
//2. Build the API


//we are using express to build an API
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;
const list = require('./MOCK_DATA.json');   //user data list

//Routes (end points)

app.get('/user', (req, res)=>{  //if client is browser, this is SSR
    const html = `
        <ul>
            ${list.map((user)=>`<li>${user.first_name}</li>`).join("")}
        </ul>
    `;

    res.send(html);
})

app.get('/api/user', (req, res)=>{   //if client is other device
     res.json(list);
})


//if route is same then, we can use this way

app.get('/api/user/:id', (req, res)=>{
    let id = Number(req.params.id); //converting to Number because it will come as string from user
    const user = list.find((user) => user.id === id);
    return res.json(user);
})
.patch(()=>{})
.delete(()=>{})



//To add/post some user data to the server, user/client needs pass the data in body object
//and then in backend that body object will be added/appened to the db
//but we can't do it directly because Express does not understand the user data
//like which data type of data it is , 
//what the data is, 
//so to overcome with these kind question for express we have to use some plugins
//which are called as middlewares   
//in this case we will ENCODEDURL middleware so that we can take user data and pass it to the DB

app.use(express.urlencoded({extended : false})) // if extended : false (means data will come as url-encoded otherwise as query string)
//This is a built-in middleware function in Express. 
//It parses incoming requests with urlencoded payloads and is based on body-parser.

app.post('/api/user', (req, res)=>{
    const body = req.body;
    //adding new user body with id to existing list
    list.push({...body, id: list.length+1});

    //to append updated list in mock data json file

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(list),  (err, data)=>{
        res.json({status: "success", id: list.length});
    })
})



app.listen(PORT, ()=>{
    console.log(`Server started at the Port : ${PORT}`);
})




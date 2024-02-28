// EXPRESS JS

// What Is Express JS?     
// Express is a node js web application framework that provides broad features 
//for building web and mobile applications. It is used to build a single page,
// multipage, and hybrid web application.
// It's a layer built on the top of the Node js that helps manage servers and routes.

//SPA - single page application in which data will render in only single page along with multiple components
        //for distinct data

//MPA - mulitple page application in which data renders in multiple pages when response comes from server

//HPA - Hybrid application means those will works as a web application and can work as native apps for(ios, android)



//why express js

//1. The main reason to use ExpressJs is to resolve the problem of writting or handling modularity 
    //or API requests, routing mannually using different - different modules like http or url or fs..

//2.    In ExpressJs these modules are in-built so dont need to use them explisitly 

//3.    It provides Middlewares, which works as a request handler between request and response cycle

//4.  It is very easy and efficient and less time consuming to create a app server with expressJs

//5. It supports Routing very efficiently on end points of URLs of client requests.

//6. Easy to debugg.

//7. it will always works in non-blocking or async way, which is best practice.

//8. it is easy to link with DB like mongodB using expressJs.



//limitaions -

//there are many issues with callbacks

//and sometimes the error messages which comes, it gets difficult to understand them.



//to use ExpressJs first need to install it using -
    //npm install express



//latest version is 4.18.2 
    

//to use, require it

const express = require('express');

const app = express();

app.get('/about', (req, res)=>{
     res.send("Hey ", req.query.name);  //here we are directly using query from request without having URL module 
                                        //because express contains these modules like http, url, fs in-built with it.
})

app.get('/signup', (req, res) =>{
    console.log(req.body);
    res.send(`hey ${req.query.name} please sign-up here.`);
})

//dont need to create server explicitly if u are using expressJs

// http.createServer(app)   //no need

app.listen(4000, (err)=>{console.log(err)});
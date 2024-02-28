//URL

//url is another module of nodeJs provided by npm
//it stands for UNIFORM RESOURCE LOCATOR

//why we need it ?

//basically when we try to get requested url from http module then for sure we will get the correct url
//but http module will not parse it or will not give the extracted url object to us so that we can use
//that object to our logic so to overcome with this we got URL module

//URL module will simply parse the given requested url into object
//which will contain all components like protocol, domain info, path, queury params etc.
//and then we can use these components into our logic and can process the request based on that
//with DB.

//to install    ->npm install url

//to require 

const http = require('http');
const url = require('url');


//http://localhost:4000/about-us/page?search=ritvik+bandewar

//1. Protocols -    //http or https or ftp or ws

//these are protocols which tells the browser like how this website will intract/communicate with others
//if https   -> hypertext transfer protocol secure, then communication and all the requests and responses 
                //will be secured, will be encrypted.
                
//if http   -> hypertext transfer protocol, communication will not be secured or encrypted.

//ftp   ->file transfer protocol, used in case of network communication or
            // file transfering from one host to another

//ws -> used for web sockets


//2. Domain -> it is nothing but a readable form of IP address
            //since we can not remember every server's or websites IP address so to make things easy
            //we have domain name for example   www.google.com, gmail.com, youtube.com


//3. Home   -> (/) this forward slash represents home page or main page

//4. path   ->it is a knid of nevigation or destiny on which request is raised
            //e.g.../about-us, /customer, /contactUs.
            
//5 Queury params
        //these are the key value combination which which basically holds or pass the user input
        //in requests and start with ? symbol in url

        
//these all things we can extract by using URL module        

const myServer = http.createServer((req, res)=>{
    const myUrl = url.parse(req.url, true); //if passing true means, url.parse() will 
                                    // also parse the query params in object

    console.log(req.url);
    console.log(myUrl);

    let userName = myUrl.query.name;
    let pathName = myUrl.pathname;
    res.end(`Hey ${userName} on ${pathName}`);


    //likewise we can create switch case based on path and so on
    //can use all components or properties of this parsed url object
});

myServer.listen(4000);







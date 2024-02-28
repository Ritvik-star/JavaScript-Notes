//In NodeJs to create a server there is a seperate module called http 
//by using this http module we can create a new server and also
//can proccess the requests and respond accordingly

//.e.g...

const http = require('http');


//we can mantain our logs of arrived requests
const fs = require('fs'); 

const myServer = http.createServer((req, res)=>{

    console.log("request received : ", req.headers);

    let log = `Request Arrived from :
                ${req.url} 
                ${req.headers.host}
                ${Date.now()}
                ${req.headers['user-agent']}
                `;  
    
    fs.appendFile("log.txt", log, (err, data)=>{    //this log will append two times always because of the main request and for fevicon of site
        switch(req.url){//by using switch we can implement basic routes and respond from server according to the path
            case '/' :
                res.end("request is received from home page");
                break;
             
            case '/about-us' :
                res.end("request is received from about-us page");    
                break;

            case '/contact-us' :
                res.end("request is received from contact-us page");
                break;
                
            default :
                res.end("request not found : 404");    
        }
    })
});

myServer.listen(4000);
//HEADERS

//Headers are the imp/head part of any API requests and response
//as they represents meta data of API requests and response
//(simply we can say, they tells about the API's and carries the info
    // of API request and response body)


    //we create/add custom headers as well


    //assume we have our server app in this some request comes

    //req.setHeader("X-myHeader", "Ritvik's Header");
                //header name           //header value
               
    //according to the best practice always start 
    //your custom header name with 'X' like (X-headerName)





   
    
 //HTTP STATUS CODES
 
 //HTTP response status codes indicate whether a specific HTTP request has been successfully completed. 
//  Responses are grouped in five classes :-

//1.    Informational responses (100 – 199) 
            //-(by these codes the  information of client requests or server response will 
            //explained.)
//2.    Successful responses (200 – 299)
            //these code represents that request or response is successfully processed or fullfilled.
//3.    Redirection messages (300 – 399)
            //in case redirections of multiple responses for one request these code are used
//4.    Client error responses (400 – 499)
            //if there is any error or mistake happened from client while raising the request then
            //these codes will represent them.
//5.    Server error responses (500 – 599)
            //if there is any server related issue happened or any error in backend then these
            //code will represent.



  ///it is best practice to set the code according to the request and response 
  //res.status(201) //thats' how we can set our status codes according to the req and res.
  
  
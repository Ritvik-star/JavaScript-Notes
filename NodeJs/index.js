//MONGODB

//It is a non- sql document based data base, 
//which works on BSON or binary json format and 
//also supports for aggregation pipelines
//which is why it is very compatible with nodejs and best for nodejs as well.


//MongoDb architechture

//It contains multiple collections and 
//these collections can have many documents (documents are nothing but these are data entries)
//  collection  - users
        // ->document-1
        // ->document-2
        // ->......and so on


//some basic commands of MongoDB
//1.    mongosh     (to start mongodb in shell)
//2.    show dbs    (it will all the databases)
//3.    use db_name     (if we wanna use/switch any perticular db)
//4.    show collections    (it is use to show all the available collections in db)        
//5.    db.collection_name.find({})     //we can run queries on any collection of db
//6.    db.collection_name.insert({})   //use to create entries inside any collection
                                   //need to pass data in form of key-value pair in {}.
                                   
                                   

//MONGOOSE
            //it is a package which used to connect our nodejs app with mongodb.

            //npm install mongoose
            //const mongoose = require('mongoose');

            //how it works -

                //1. Build SCHEMA (it will define the structure)
                    //2. using SCHEMA -> build MODEL
                        //3. using MODEL -> do CRUD operations 



const { timeStamp } = require('console');
const express = require('express');
const mongoose = require('mongoose');

const userRouter = require("./Routes/user"); 

const {logReqRes} = require("./Middlewares/user");

const app = express();
const PORT = 8000;
app.listen(PORT, ()=>{console.log(`Server Started at Port : ${PORT}`)});



//middleware - builit plugin used for taking user data in form and parse it to express
app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));




//step-1 connect nodeJs app to DB using mongoose

const dbName = "firstDB";
const dbUrl = `mongodb://127.0.0.1:27017/${dbName}`;
mongoose.connect(dbUrl)
.then(() => { console.log("MongoDB Connected")})
.catch((err) => console.log("Error Found ", err));



//step-2 build schema for mongoose
        //schema for users
// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     gender: {
//         type: String,
//     }
// },
//  {timestamps: true}    
// ); 




//step-2   create model using schema
 
// const User = mongoose.model('user', userSchema);
    //using this User object of our model we can intract with mongoDB
    



//Routes    


// app.post("/api/users", async (req, res)=>{
//    const body = req.body;
   
//    if(!body || !body.firstName || !body.lastName || !body.email || !body.gender){
//         res.status(400).end("Bad Request Found : 400");
//    }

//    const result = await User.create({
//     firstName: body.firstName,
//     lastName: body.lastName,
//     email: body.email,
//     gender: body.gender,
//    });

//    console.log("result", result);

//    return res.status(201).json({msg: "created successfully."});
// })





// app.get("/users", async (req, res) => {
//     const allDBUsers = await User.find({});

//     const html = `<ul>
//         All Available Users : 
//         ${allDBUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//     </ul>`;

//     // res.send(html);


//     res.json(allDBUsers)    // -> if we want to share db data as json in response
// })


// app.get("/api/user/:id", async (req, res)=>{
//     const user = await User.findById(req.params.id);    //findById() will find user based on params id in db

//     if(user){
//         res.json(user);
//     }else{
//         res.status(404).json({msg: "user not found : 404"});
//     }
// });

// app.patch("/api/user/:id", async (req, res) => {

//     const body = req.body;
   
//     if(!body || !body.firstName || !body.lastName || !body.email || !body.gender){
//          res.status(400).end("Bad Request Found : 400");
//     }
 
//     const result = {
//      firstName: body.firstName,
//      lastName: body.lastName,
//      email: body.email,
//      gender: body.gender,
//     };

//     await User.findByIdAndUpdate(req.params.id, result);

//     res.json({msg: "user updated successfully"});
// })


// app.delete("/api/user/:id", async (req, res) => {
//     await User.findByIdAndDelete(req.params.id);

//     res.json({msg: "user deleted successfully"});
// })



app.use("/users", userRouter);
//if any request will come on 'users' route then it will 'userRouter' 
//according to the request method





//MVC
//M     -> MODEL (which we create by using our schema and it contains all the schemas and models)

//V     -> VIEW  (in this we render data on UI)

//C     -> CONTROLLER   (in this we do manipulations on our model)


//MVC is a kind of pattern by which following we can segregate our code or code files
//like routes, models, connections, controllers in different-different folder
//by using this technique we can make our app more efficient and readable and easy to maintain.



//controllers use to do  manipulations on  models
//models uses to update view.

//controllers   -> models   -> view

//that's how the flow works



//which folder contain what !

//index.js
            //this will main file, will be having overview of whole app

//Model
        //1.    Schema
        //2.    model of schema

//Routes
        // 1. Routes for all type http request provide by router of express

//controller
        //-> it will have the main logic or handlers functions for routers based on http
        //requests.


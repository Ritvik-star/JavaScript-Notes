//Shortener URL

//Uniform resource locator

//shortener URL
    // it is a service in which it takes valid URL and returns 
    //shortener URL (means some random string with specific sized)


const express = require('express');

const app = express();
const PORT = 8001;

app.listen(PORT, ()=>{console.log(`Server Started at Port : ${PORT}`)});

app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());    //it will parse the incoming json body

const urlRoute = require("./routes/url");

app.use(express.json());
app.use("/url", urlRoute);

const mongoose = require('mongoose');
const dbName = "Short-URL";
const dbUrl = `mongodb://127.0.0.1:27017/${dbName}`;
mongoose.connect(dbUrl)
.then(()=>{console.log("MongoDB Connected.")})
.catch((err)=>{console.log(err)});

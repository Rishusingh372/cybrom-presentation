const express = require("express");
const app=express();
const EmpRoute = require("./routes/user.route.js");
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
require("dotenv").config();


// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Succesfully Connected!");
})
app.use(cors());
app.use("/employees", EmpRoute);



app.get("/home", (req, res)=>{
     console.log("Home Page!");
     res.status(200).send("Home page Response!");
})
app.get("/about", (req, res, next)=>{
       throw new Error('Example About  error');
})

app.get("/service", (req, res)=>{
      let name=false;
      if (name){
         res.status(200).send("Welcome To Service Page!");
      }
      else
      {
        res.status(200).send("Error in Service Page!");
      }
});
app.use((err, req, res, next)=>{
     console.log(err.stack);
     res.status(500).send(err.message);
})

const Port = process.env.PORT ;
app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}`);
})
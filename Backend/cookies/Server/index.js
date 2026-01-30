// const express = require("express");
// const app=express();
// const EmpRoute = require("./routes/emp.route.js");
// const cors= require("cors");
// const cookieParser = require('cookie-parser');
// const bodyparser = require('body-parser')
// const mongoose = require("mongoose");
// require("dotenv").config();



// // Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())
// mongoose.connect(process.env.DBCONN).then(()=>{
//     console.log("DB Succesfully Connected!");
// })

// app.use(cookieParser());

// app.use(cors());
// app.use("/employees", EmpRoute);



// app.get("/home", (req, res)=>{
//      console.log("Home Page!");
//      res.status(200).send("Home page Response!");
// })
// app.get("/about", (req, res, next)=>{
//        throw new Error('Example About  error');
// })

// app.get("/service", (req, res)=>{
//       let name=false;
//       if (name){
//          res.status(200).send("Welcome To Service Page!");
//       }
//       else
//       {
//         res.status(200).send("Error in Service Page!");
//       }
// });
// app.use((err, req, res, next)=>{
//      console.log(err.stack);
//      res.status(500).send(err.message);
// })

// const Port = process.env.PORT ;
// app.listen(Port, ()=>{
//     console.log(`Server run on Port ${Port}`);
// })

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cookies parser middleware
app.use(cookieParser());

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // adjust this to your client's origin
    credentials: true
}));

// connection to MongoDb

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Successfully Connected!");

})
.catch((err)=>{
    console.error("DB Connection Error:", err);
});

// server connection

app.listen(8000, ()=>{
    console.log("Server is running on Port 8000");
    
})




const express = require("express");
const app = express();

const EmpRoute = require("./routes/emp.route.js");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Cookie parser (IMPORTANT)
app.use(cookieParser());

// CORS (IMPORTANT for cookies)
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ change to 3000 if your react runs on 3000
    credentials: true,
  })
);

mongoose
  .connect(process.env.DBCONN)
  .then(() => {
    console.log("DB Successfully Connected!");
  })
  .catch((err) => console.log("DB Connection Error:", err));

app.use("/employees", EmpRoute);

// app.get("/home", (req, res) => {
//   console.log("Home Page!");
//   res.status(200).send("Home page Response!");
// });

// app.get("/about", (req, res, next) => {
//   throw new Error("Example About error");
// });

// app.get("/service", (req, res) => {
//   let name = false;
//   if (name) {
//     res.status(200).send("Welcome To Service Page!");
//   } else {
//     res.status(200).send("Error in Service Page!");
//   }
// });

// app.use((err, req, res, next) => {
//   console.log(err.stack);
//   res.status(500).send(err.message);
// });

const PORT =  8000;
app.listen(PORT, () => {
  console.log(`Server run on Port ${PORT}`);
});

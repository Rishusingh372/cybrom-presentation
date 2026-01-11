require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoute"));

// Database connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/authDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Server

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

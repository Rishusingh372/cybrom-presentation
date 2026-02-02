const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS middleware
app.use(
  cors({
    origin: 'http://localhost:3000', // Adjust according to your frontend port
    credentials: true,
  })
);

// MongoDB connection
mongoose
  .connect(process.env.DBCONN)
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => console.log('Database connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the CRUD API server!');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
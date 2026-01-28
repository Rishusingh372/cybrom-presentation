const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user.route');
const bcrypt = require('bcryptjs');


// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,
}));

// connect to mongoDb

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes

app.use('/api/users', userRoutes);



// server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
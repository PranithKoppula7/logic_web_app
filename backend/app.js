const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoute = require('./routes/auth');
const questionsRoute = require('./routes/questions');
const dotenv = require('dotenv');

dotenv.config();


// connect to db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => console.log("connected to db")
);

app.use(express.json());

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

// listening
app.listen(3000);

// routes
app.use('/api/user', authRoute);
app.use('/api/questions', questionsRoute);
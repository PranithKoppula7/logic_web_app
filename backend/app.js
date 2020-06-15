const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();


// connect to db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
() => console.log("connected to db")
);

app.use(express.json());


// listening
app.listen(3000);

// routes
app.use('/api/user', authRoute)

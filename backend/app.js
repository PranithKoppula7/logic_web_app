const express = require('express');
const mongoose = require('mongoose');
const app = express();

// listening
app.listen(3000);

// routes
app.get('/', (req, res) => {
  res.send("We are on home");
});

// connect to db
mongoose.connect('encrypted',
{ useNewUrlParser: true },
  () => {
  console.log("connected to db");
})

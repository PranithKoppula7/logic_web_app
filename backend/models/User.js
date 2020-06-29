const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3
  },
  lastName: {
    type: String,
    required: true,
    min: 3
  },
  email: {
    type: String,
    required: true,
    min: 3
  },
  pid: {
    type: Number,
    required: true
  },
  totalStars: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
    max: 1024
  }
},
{
  collection: 'users'
});

module.exports = mongoose.model('User', userSchema);

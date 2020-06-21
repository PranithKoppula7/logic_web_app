const router = require('express').Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.post('/register', async (req, res) => {
  // validation
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  // check if user exists
  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(400).send('Email already exists');

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    pid: req.body.pid,
    totalStars: req.body.totalStars,
    password: hashPassword
  });
  try {
    const savedUser = await user.save();
    res.send(
      {
        firstName: user.firstName
      });
  } catch(err) {
    res.status(400).send(err);
  }
});


router.post('/login', async (req, res) => {
    // validation
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // check if email exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email does not exist');

    // password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');


    // create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    // res.header(token).send(token);
    res.send({
      _user: user,
      token: token
    });

});

module.exports = router;


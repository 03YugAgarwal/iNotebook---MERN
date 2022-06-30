const express = require('express');
const User = require("../models/User")
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'oansdoNONW!23123P@NP#$N!@daodno(*)@U$)@!#H!Nasda'

// create a user using: POST "/api/auth/Creates new user"
// No LOGIN REQUIRED
// Creates new user
router.post('/createUser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({ min: 8 }),
],async (req,res)=>{
    // if errors return bad request
    // from validator docs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //save in database from validator docs
    try{
      let user = await User.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "User already exists with given email."})
      }

      // variabes with hasing salt and pepper
      var salt = await bcrypt.genSaltSync(10);
      let secPass = await bcrypt.hash(req.body.password,salt);

      user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        })

        const data = {
          user:{
            id: user.id
          }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        
        res.json(authToken)

    }catch(error){
      console.log(error.message);
      res.status(500).send("Some error Occured")
    }


})

module.exports = router
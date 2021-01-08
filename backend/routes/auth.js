//the authontication route for regester page (login)
const router = require("express").Router();
//import the usermodel  use the schema to insert the data 
const User = require('../models/User');
//for hashing the password...........
const bcrypt = require('bcrypt');
// use joi to validate the data inputs from user.............. 
const Joi = require('@hapi/joi');
//for the token
const JWT = require('jsonwebtoken');
const auth = require("./middleware");
//the validation schema using joi :)
const querySchema = Joi.object({
  userName     : Joi.string().required(),
  age          : Joi.string().required(),
  email        : Joi.string().required().lowercase().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  role         : Joi.string().required(),
  password     : Joi.string().min(8).required(),
  passwordAgain: Joi.ref('password'),//to equal password
})
//we add async here cause we need sometime to submit the data here
router.post("/register", async (req, res) => {
  //what I need to cheeck for the user registration:
    try {
      let { userName, age, email, password, role } = req.body;
      // validate
      //0- check if the user enter the filed 
      const{error}  = querySchema.validate(req.body);
      console.log(req.body)
      if(error){
          return res.status(403).json({msg :error.details[0].message})}
      if ( !userName || !age||!email || !password || !role )
        return res.status(400).json({ msg: "Not all fields have been entered." });
     //1- The email is  alredy used
      const existingUser = await User.findOne({ email: email });
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." });
    //hashing
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const newUser = new User({
          userName,
          age,
          role,
          email,
          password: passwordHash,
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});
/*WhAT i NEED TO DO ?
1- take the value (email and password) and store them at const
2- check if the values are not empty
3-look for the email at the db using(findone method)
3- the pass is encripted sooo , I will use the tokens method and gooooogle for it
*/
    router.post("/login", async (req, res) => {
      try {
        const {email, password } = req.body;
        console.log(req)
        // validate email && user
        if (!email || !password)
          return res.status(400).json({ msg: "Not all fields have been entered." });
        const user = await User.findOne({ email: email });
        if (!user)
          return res
            .status(400)
            .json({ msg: "No account with this email has been registered." });
// compare between the new passord with the password in db
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
    //create token 
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
          token,
          user: {
            id: user._id,
            role:user.role,
            name:user.userName
          },
        });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
    router.post("/tokenIsValid", async (req, res) => {
      try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = JWT.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
    // router.get("/",auth,  async (req, res) => {
    //   const user = await User.findById(req.user);
    //   res.json(user);
    // });
module.exports = router;
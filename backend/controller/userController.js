const User = require("../model/User");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


// registering user
exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email , name: req.body.name });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: "email already in use"
      });
    }
    
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    let data = await user.save();
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// login user 
exports.loginUser = async(req,res)=>{
    try {
      let findUser = await User.findOne({ email: req.body.email });
        if (!findUser) {
          return res.json({ message: "User not found." });
        }
        else {
          await bcrypt.compare(req.body.password, findUser.password,(err, result) => {
            if (err) {
              return res.status(400).json({ message: "Something went wrong." });
            }  
            if (result) {
              const token = jwt.sign({ _id: findUser._id, name: findUser.name, email: findUser.email, role: findUser.role },"secret");
                            res.json({
                              message: "Auth successfull",
                              token: token,
                              role: findUser.role
                            });
                  }
                  else {
                    res.json({ message: "Username or Password wrong." });
                  }
            })
        }
    } catch (err) {
        res.status(400).json({ err: err });
    }
  }

// user details
  exports.getUserDetails = async (req, res) => {
    console.log(req.userData)
    await res.json(req.userData);
  };

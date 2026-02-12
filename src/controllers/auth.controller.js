const userModel = require("../models/user.model");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



async function registerUser(req, res) {
  const { username, email, password, role } = req.body;

  const existingUser = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  // to hash the password
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    username,
    email,
    password: hashPassword,
    role,
  });

  // creating token
  const token = jwt.sign(
    {
      id: newUser._id,
      role: newUser.role,
    },
    process.env.JWT_SECRET,
  );

  // store token in cookie
  res.cookie("cookieToken", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
    },
  });

  console.log(req.body);
}

// for the login user

async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  // to check the correct password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  // else creating token
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  //   store token in cookie

  res.cookie("cookieToken", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}


//  for the logout user 

async function logoutUser(req, res){
  res.clearCookie("cookieToken")
  res.status(200).json({
    message:"user logout Successfully"
  })
}





module.exports = { registerUser, loginUser, logoutUser };

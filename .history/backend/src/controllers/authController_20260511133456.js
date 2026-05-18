import bcrypt from "bcryptjs";

import User from "../models/User.js";

import generateToken from "../utils/generateToken.js";

/*
=====================================
REGISTER USER
=====================================
*/

export const registerUser = async (req, res) => {
  try {
    /*
    =====================================
    GET DATA
    =====================================
    */

    const { name, email, password } = req.body;

    /*
    =====================================
    VALIDATION
    =====================================
    */

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    /*
    =====================================
    CHECK EXISTING USER
    =====================================
    */

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    /*
    =====================================
    HASH PASSWORD
    =====================================
    */

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    /*
    =====================================
    CREATE USER
    =====================================
    */

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    /*
    =====================================
    GENERATE TOKEN
    =====================================
    */

    const token = generateToken(user._id);

    /*
    =====================================
    RESPONSE
    =====================================
    */

    res.status(201).json({
      success: true,

      message: "User registered successfully",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/*
=====================================
LOGIN USER
=====================================
*/

export const loginUser = async (req, res) => {
  try {
    /*
    =====================================
    GET DATA
    =====================================
    */

    const { email, password } = req.body;

    /*
    =====================================
    VALIDATION
    =====================================
    */

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    /*
    =====================================
    FIND USER
    =====================================
    */

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    /*
    =====================================
    CHECK PASSWORD
    =====================================
    */

    const isPasswordMatched = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    /*
    =====================================
    GENERATE TOKEN
    =====================================
    */

    const token = generateToken(user._id);

    /*
    =====================================
    RESPONSE
    =====================================
    */

    res.status(200).json({
      success: true,

      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
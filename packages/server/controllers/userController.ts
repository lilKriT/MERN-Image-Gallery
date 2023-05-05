import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/User";

// @desc Register user
// @route POST api/v1/users
// @access Public
const registerUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    // Do we have all the info?
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill out all the fields");
    }

    // Does the user already exist?
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("Username taken");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Registering user");
    res.status(200).send("Registering user");
  }
);

// @desc Log in user
// @route POST api/v1/users/login
// @access Public
const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
  console.log("User Logged in");
  res.status(200).send("Logging user in");
});

// @desc Get user info
// @route POST api/v1/users/me
// @access Private
const getMe = expressAsyncHandler(async (req: Request, res: Response) => {
  console.log("My info");
  res.status(200).send("User information");
});

export { registerUser, loginUser, getMe };

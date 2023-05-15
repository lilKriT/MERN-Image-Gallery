import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
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

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  }
);

// @desc Log in user
// @route POST api/v1/users/login
// @access Public
const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Does user exist?
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Get user info
// @route POST api/v1/users/me
// @access Private
const getMe = expressAsyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.body.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const { id, name, email } = user;
  res.status(200).json({ id, name, email });
});

// @desc Get user name
// @route GET api/v1/users/name/:id
// @access Public
const getName = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const { name } = user;
  res.status(200).json({ name });
});

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET as string, { expiresIn: "30d" });
};

export { registerUser, loginUser, getMe, getName };

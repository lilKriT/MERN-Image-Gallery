import { Request, Response } from "express";

// @desc Register user
// @route POST api/v1/users
// @access Public
const registerUser = (req: Request, res: Response) => {
  console.log("Registering user");
  res.status(200).send("Registering user");
};

// @desc Log in user
// @route POST api/v1/users/login
// @access Public
const loginUser = (req: Request, res: Response) => {
  console.log("User Logged in");
  res.status(200).send("Logging user in");
};

// @desc Get user info
// @route POST api/v1/users/me
// @access Private
const getMe = (req: Request, res: Response) => {
  console.log("My info");
  res.status(200).send("User information");
};

export { registerUser, loginUser, getMe };

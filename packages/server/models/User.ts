import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a user name"],
  },
  email: {
    type: String,
    required: [true, "Please add a username"],
  },
});

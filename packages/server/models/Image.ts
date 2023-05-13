import mongoose from "mongoose";
import User from "./User";

const ImageSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: User,
      required: [true, "Please add a user"],
    },
    url: {
      type: String,
      unique: true,
      required: [true, "Please add a proper url"],
    },
    alt: {
      type: String,
      required: [true, "Please add alternate text"],
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", ImageSchema);

export default Image;

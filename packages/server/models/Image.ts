import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
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

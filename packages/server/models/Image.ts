import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: [true, "Please add a proper url"],
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", ImageSchema);

export default Image;

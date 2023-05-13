import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Image from "../models/Image";

// @desc Get Image
// @route GET api/v1/image
// @access Public
const getImage = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Getting image" });
});

// @desc Get All Images
// @route GET api/v1/allimages
// @access Public
const getAllImages = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json({ msg: "All the images!" });
  }
);

// @desc Add Image
// @route POST api/v1/image
// @access Private
const addImage = expressAsyncHandler(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400);
    throw new Error("Please send a valid image");
  }

  // console.log(req.body);

  const image = await Image.create({
    owner: req.body.user,
    url: req.file.filename,
    alt: req.body.alternate,
  });

  if (image) {
    res.status(200).send("Single file uploaded");
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

// @desc Remove Image
// @route DELETE api/v1/image
// @access Private
const deleteImage = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Removing image" });
});

export { getImage, addImage, deleteImage as removeImage };

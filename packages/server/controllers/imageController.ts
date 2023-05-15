import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Image from "../models/Image";
import User from "../models/User";

// @desc Get Image
// @route GET api/v1/image
// @access Public
const getImage = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Getting image: ${id}` });
});

// @desc Get All Images
// @route GET api/v1/allimages
// @access Public
const getAllImages = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const images = await Image.find();
    res.status(200).json(images);
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
  const { id } = req.params;

  // console.log(req.body.user);

  const image = await Image.findById(id);

  // console.log(image);

  res
    .status(200)
    .json({
      msg: "Removing image",
      imageID: id,
      loggedUser: req.body.user,
      iamge: image,
    });
});

export { getImage, getAllImages, addImage, deleteImage as removeImage };

import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Image from "../models/Image";
import path from "path";
import fs from "fs";

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
  const image = await Image.findById(id);

  if (!image) {
    res.status(400);
    throw new Error("Image not found");
  }

  if (!req.body.user) {
    res.status(400);
    throw new Error("User not found");
  }

  const ownerID = String(image.owner);
  const userID = req.body.user.id;

  if (userID !== ownerID) {
    res.status(400);
    throw new Error("User not authorized");
  }

  await image.deleteOne();

  const imagePath = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "images",
    image.url
  );

  fs.unlink(imagePath, (err) => {
    if (err) {
      res.status(400);
      throw err;
    }
    console.log("Image deleted");
  });

  res.status(200).json({
    id,
  });
});

export { getImage, getAllImages, addImage, deleteImage as removeImage };

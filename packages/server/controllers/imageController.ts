import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Image from "../models/Image";

// @desc Get Image
// @route GET api/v1/image
// @access Public
const getImage = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Getting image" });
});

// @desc Add Image
// @route POST api/v1/image
// @access Private
const addImage = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Adding image" });
});

// @desc Remove Image
// @route DELETE api/v1/image
// @access Private
const deleteImage = expressAsyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ msg: "Removing image" });
});

export { getImage, addImage, deleteImage as removeImage };

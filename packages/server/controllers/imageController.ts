import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Image from "../models/Image";
import multer from "multer";

const storageEngine = multer.diskStorage({
  destination: "./images", // Is this correct still?
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({
  storage: storageEngine,
  limits: {
    fileSize: 1000000, // current limit: 1MB
  },
  // fileFilter: (req, file, cb) => {
  //   checkImageType(file, cb);
  // },
});

// // Testing for file types
// import path from "path";
// // I should fix the typing here
// const checkImageType = (file: any, cb: any) => {
//   // Allowed extensions
//   const fileTypes = /jpeg|jpg|png|gif|svg/;

//   // Check extension names
//   const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

//   const mimeType = fileTypes.test(file.mimeType);

//   if (mimeType && extName) {
//     return cb(null, true);
//   } else {
//     cb("You can only upload images!");
//   }
// };

// Adding image uploads
// router.post("/api/v1/image/single", upload.single("image"), (req, res) => {
//   console.log("Bang");
//   if (req.file) {
//     res.send("Single file uploaded");
//   } else {
//     res.status(400).send("Please send a valid image");
//   }
// });

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

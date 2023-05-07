import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import userRoutes from "./routes/api/v1/userRoutes";
import imageRoutes from "./routes/api/v1/imageRoutes";
import connectDB from "./config/db";
import errorHandler from "./middleware/errorHandler";
import multer from "multer";

// Basic config
const app = express();
dotenv.config({ path: "../../.env" });
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Multer - temporarily here
// const storageEngine = multer.diskStorage({
//   destination: "./images",
//   filename: (req, file, cb) => {
//     cb(null, `${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage: storageEngine,
//   limits: {
//     fileSize: 1000000, // current limit: 1MB
//   },
//   // fileFilter: (req, file, cb) => {
//   //   checkImageType(file, cb);
//   // },
// });

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

// Routes
const router = express.Router();
router.use("/api/v1/users", userRoutes);
router.use("/api/v1/images", imageRoutes);

// Adding image uploads
// router.post("/api/v1/image/single", upload.single("image"), (req, res) => {
//   console.log("Bang");
//   if (req.file) {
//     res.send("Single file uploaded");
//   } else {
//     res.status(400).send("Please send a valid image");
//   }
// });

app.use(router);
app.use(errorHandler); // does it matter where this is? yes it does. This has to be after router.

// Connect to DB
connectDB();

// Listening
app.listen(port, () => {
  console.log(
    colors.green.underline(`Image Gallery listening on port ${port}`)
  );
});

// TODO: router for users
// TODO: router for images

// TODO: connect to db

// TODO: middleware for password
// TOOD: middleware for errors

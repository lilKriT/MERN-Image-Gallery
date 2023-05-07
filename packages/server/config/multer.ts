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
  fileFilter: (req, file, cb) => {
    checkImageType(file, cb);
  },
});

// Testing for file types
import path from "path";
// I should fix the typing here
const checkImageType = (file: any, cb: any) => {
  // Allowed extensions
  const fileTypes = /jpeg|jpg|png|gif|svg/;

  // Check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  //   const mimeType = mimeTypes.test(file.mimeType);

  //   TODO: add checking for mimetype
  if (extName) {
    return cb(null, true);
  } else {
    cb("You can only upload images!");
  }
};

// Adding image uploads
// router.post("/api/v1/image/single", upload.single("image"), (req, res) => {
//   console.log("Bang");
//   if (req.file) {
//     res.send("Single file uploaded");
//   } else {
//     res.status(400).send("Please send a valid image");
//   }
// });

export { upload };

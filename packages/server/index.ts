import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import userRoutes from "./routes/api/v1/userRoutes";
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

// Multer - temporarily here
const storageEngine = multer.diskStorage({
  destination: "/images",
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({
  storage: storageEngine,
});

// Routes
const router = express.Router();
router.use("/api/v1/users", userRoutes);

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

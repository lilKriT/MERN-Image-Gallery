import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import userRoutes from "./routes/api/v1/userRoutes";
import imageRoutes from "./routes/api/v1/imageRoutes";
import connectDB from "./config/db";
import errorHandler from "./middleware/errorHandler";

// Basic config
const app = express();
dotenv.config({ path: "../../.env" });
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:5173" }));

// Routes
const router = express.Router();
router.use("/api/v1/users", userRoutes);
router.use("/api/v1/images", imageRoutes);

app.use(router);
app.use(errorHandler); // does it matter where this is? yes it does. This has to be after router.

// Static images
import path from "path";
app.use(express.static(path.join(__dirname, "..", "public"))); // I need to use .. because of TS!

// Connect to DB
connectDB();

// Listening
app.listen(port, () => {
  console.log(
    colors.green.underline(`Image Gallery listening on port ${port}`)
  );
});

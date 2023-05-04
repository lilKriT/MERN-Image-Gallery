import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import userRoutes from "./routes/api/v1/userRoutes";

// Basic config
const app = express();
dotenv.config({ path: "../../.env" });
const port = process.env.PORT || 3000;

// Middleware

// Routes
const router = express.Router();
router.use("/api/v1/users", userRoutes);

app.use(router);

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

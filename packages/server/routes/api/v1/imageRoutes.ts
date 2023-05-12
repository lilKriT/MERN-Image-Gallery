import { Router } from "express";
import {
  getImage,
  addImage,
  removeImage,
} from "../../../controllers/imageController";
import protect from "../../../middleware/authMiddleware";
import { upload } from "../../../config/multer";

const imageRoutes = Router();
imageRoutes.get("/", getImage);
imageRoutes.post("/", protect, upload, addImage);
imageRoutes.delete("/", protect, removeImage);

export default imageRoutes;

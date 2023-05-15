import { Router } from "express";
import {
  getImage,
  addImage,
  removeImage,
  getAllImages,
} from "../../../controllers/imageController";
import protect from "../../../middleware/authMiddleware";
import { upload } from "../../../config/multer";

const imageRoutes = Router();
imageRoutes.get("/", getAllImages);
imageRoutes.get("/:id", getImage);
imageRoutes.post("/", protect, upload, addImage);
imageRoutes.delete("/:id", protect, removeImage);

export default imageRoutes;

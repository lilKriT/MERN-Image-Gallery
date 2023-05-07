import { Router } from "express";
import {
  getImage,
  addImage,
  removeImage,
} from "../../../controllers/imageController";
import protect from "../../../middleware/authMiddleware";

const imageRoutes = Router();
imageRoutes.get("/", getImage);
imageRoutes.post("/", protect, addImage);
imageRoutes.delete("/", protect, removeImage);

export default imageRoutes;

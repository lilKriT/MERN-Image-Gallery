import { Router } from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../../../controllers/userController";
import protect from "../../../middleware/authMiddleware";

const userRoutes = Router();
userRoutes.post("/", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/me", protect, getMe);

export default userRoutes;

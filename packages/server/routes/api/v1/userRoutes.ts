import { Router } from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../../../controllers/userController";

const userRoutes = Router();
userRoutes.post("/", registerUser);
userRoutes.post("login", loginUser);
userRoutes.get("/me", getMe);

export default userRoutes;

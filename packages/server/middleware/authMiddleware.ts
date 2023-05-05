import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../models/User";

const protect = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Get token from the header
        token = req.headers.authorization.split(" ")[1];

        // Verify the token
        const decoded = jwt.verify(
          token,
          process.env.SECRET as string
        ) as jwt.JwtPayload;

        // Get user from token
        req.body.user = await User.findById(decoded.id).select("-password");

        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

export default protect;

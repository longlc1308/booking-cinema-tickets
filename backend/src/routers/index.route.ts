import express from "express";
import { userRoutes } from "./apis/user.route";
import { movieRoutes } from "./apis/movie.route";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/movie", movieRoutes);

export default router;
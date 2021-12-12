import express from "express";
import { userRoutes } from "./apis/user.route";
import { movieRoutes } from "./apis/movie.route";
import { showTimeRoutes } from "./apis/show-time.route";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/movie", movieRoutes);
router.use("/showtime", showTimeRoutes);

export default router;
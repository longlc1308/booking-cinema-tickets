import express from "express";
import { userRoutes } from "./apis/user.route";
import { movieRoutes } from "./apis/movie.route";
import { showTimeRoutes } from "./apis/show-time.route";
import { bookingRouters } from './apis/booking-seat.route';

const router = express.Router();

router.use("/user", userRoutes);
router.use("/movie", movieRoutes);
router.use("/booking", bookingRouters);
router.use("/showtime", showTimeRoutes);

export default router;
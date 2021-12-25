import express from "express";
import * as bookingSeatController from '../../controllers/booking-seat.controller';
const router = express.Router();

router.post("/", bookingSeatController.create);

export const bookingRouters = router;
import express from "express";
const router = express.Router();
import { upload } from "../../middlewares/multer";
import * as showTimeController from "./../../controllers/show-time.controller"

router.post("/", upload.none(), showTimeController.createShowTime);

export const showTimeRoutes = router;
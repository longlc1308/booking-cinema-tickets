import express from "express";
const router = express.Router();
import { upload } from "../../middlewares/multer";
import * as movieController from "../../controllers/movie.controller";

router.post("/", upload.single('imageURL'), movieController.createMovie);
router.delete("/", movieController.deleteMovie);
router.get("/:slug", movieController.fetchMovie);
router.get("/", movieController.fetchMovies);


export const movieRoutes = router;
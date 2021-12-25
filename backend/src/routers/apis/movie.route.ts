import express from "express";
import { upload } from "../../middlewares/multer";
import * as movieController from "../../controllers/movie.controller";
const router = express.Router();


router.post("/", upload.single('imageURL'), movieController.createMovie);
router.delete("/", movieController.deleteMovie);
router.get("/:slug", movieController.fetchMovie);
router.get("/", movieController.fetchMovies);


export const movieRoutes = router;
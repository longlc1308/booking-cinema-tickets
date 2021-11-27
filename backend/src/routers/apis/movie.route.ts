import express from "express";
const route = express.Router();
import { upload } from "../../middlewares/multer";
import * as movieController from "../../controllers/movie.controller";

route.post("/", upload.single('imageURL'), movieController.createMovie);
route.delete("/", movieController.deleteMovie);
route.get("/:slug", movieController.fetchMovie);
route.get("/", movieController.fetchMovies);


export const movieRoutes = route;
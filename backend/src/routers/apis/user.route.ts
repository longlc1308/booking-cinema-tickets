import express from "express";
import * as userController from "../../controllers/user.controller"
import {cookieJwtAuth} from "../../middlewares/auth";
const route = express.Router();

route.post("/signup", userController.signup);


export const userRoutes = route;
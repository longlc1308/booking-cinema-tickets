import express from "express";
import * as userController from "../../controllers/user.controller"
import {cookieJwtAuth} from "../../middlewares/auth";
const route = express.Router();

route.post("/signup", userController.signup);
route.post("/login", userController.login);
route.post("/change-password", cookieJwtAuth, userController.changePassword);


export const userRoutes = route;
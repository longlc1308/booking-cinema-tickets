import express from "express";
import * as userController from "../../controllers/user.controller"
import {cookieJwtAuth} from "../../middlewares/auth";
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/change-password", cookieJwtAuth, userController.changePassword);
router.put("/forgot-password", userController.forgotPassword);
router.put('/reset-password/:token', userController.resetPassword);
router.put("/update-user/:id", userController.updateUserData);
router.get("/user-detail/:id", userController.fetchUserDetails);
router.get("/", userController.fetchUsers);


export const userRoutes = router;
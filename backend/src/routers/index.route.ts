import express from "express";
import { userRoutes } from "./apis/user.route";

const router = express.Router();

router.use("/user", userRoutes);

export default router;
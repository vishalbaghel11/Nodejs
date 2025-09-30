import express from "express";
import { registerUser, getAllUsers, getUserById } from "../controllers/user.controller.js";
import { upload } from "../middlewares/middleware.model.js";
const router = express.Router();

router.post("/register", registerUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);

export default router;

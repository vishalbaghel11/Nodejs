// import express from "express";
import { Router } from "express";
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateUserAvatar, 
    updateUserCoverImage, 
    getUserChannelProfile, 
    getWatchHistory, 
    updateAccountDetails
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/middleware.model.js";
const router = express.Router();
router.route("/register").post(registerUser) ;

export default router;
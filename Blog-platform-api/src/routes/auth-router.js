import express from "express"
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/auth-middleware.js"
const router=express.Router()

router.post('/login',authController.loginUser);
router.post('/register',authController.registerUser);
router.post('/change-password',authMiddleware.authMiddleware,authController.changePassword);
router.post('/logout',authController.logoutUser)


export default router;

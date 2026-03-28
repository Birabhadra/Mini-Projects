import express from "express"
import authController from "../contollers/authcontroller.js";
const router=express.Router()


router.post('/login',authController.loginUser);
router.post('/register',authController.registerUser);
router.post('/change-password',authController.changePassword);


export default router;

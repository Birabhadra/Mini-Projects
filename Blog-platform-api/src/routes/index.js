import express from "express";
import authRouter from "./auth-router.js"
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json("OK");
});
router.use('/auth',authRouter)
export default router;

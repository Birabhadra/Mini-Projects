import Model from "../models/index.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

const registerUser=async(req,res)=>{
    try{
        const {userName,email,password}=req.body
        if (!userName || !email || !password){
            return res.status(400).json({
                message:"username,email and password are required"
            })
            
        }
        const checkexisting = await Model.User.findOne({
            $or: [{ userName }, { email }],
          });
        if (checkexisting){
            res.status(400).json({
                message:"User already exists, Please login"
            })
            return 
        }
        const user=new Model.User({
            userName,
            email,
            password,
            country:req.body.country||"",
            authType:req.body.authType ||  "NORMAL",
        })
        const newUser=user.save()
        const token=jwt.sign({userId:user},process.env.JWT_SECRET,{expiresIn:"3d"})
        res.cookie("token",token);
        if (newUser){
            return res.status(201).json({
                message:"User Registered successfully",
                user:newUser
            });
        }else{
            return res.status(400).json({
                message:"User registration failed"
            })
        }
    }catch(error){
        console.log(error)
        return res.status(400).json({
            message:`Internal server error ${error}`
        })
    }

}


const loginUser=async (req,res)=>{
    try{
        const {email,password}=req.body
        if (!email || !password){
            return res.status(401).json({
                message:"Email and password are required"
            })
        }
        const getUser=await Model.User.findOne({
            email:email
        }).select("+password")
        if (!getUser){
            return res.status(401).json({
                message:"User doesn't exist please register"
            })
        }
        const isvalidPassword=await getUser.comparePassword(password)
        if(!isvalidPassword){
            return res.status(401).json({
                message:"Please enter a valid Password"
            })
        }
        const token=jwt.sign({userId:getUser},process.env.JWT_SECRET,{expiresIn:"3d"})
        res.cookie("token",token)
        return res.status(200).json({
            user:{ 
                _id:getUser._id,
                email:getUser.email,
                name:getUser.name
            },
            token
        })

    }catch(error){
        console.log(error)
        return res.status(400).json({
            message:`Unexpected error occured ${error}`})
    }
}

const logoutUser=async(req,res)=>{
    try{
        const token=req.cookies?.token||req.headers.authorization?.split(" ")[1]
        res.clearCookie("token", {
            httpOnly: true,
            secure: true, // set to true if using HTTPS
            sameSite: 'None'
        });
        if (token) {
            await Model.blacklistToken.create({ token });
        }

        return res.status(200).json({
            message: "User logged out successfully"
        });

    }catch(error){
        console.log(error)
        return res.status(400).json({
            message:`Unexpected error occured ${error}`
        })
    }
}
const changePassword=async(req,res)=>{
    try{
        const userId=req.userInfo.userId;
    const{oldPassword,newPassword}=req.body;

    const user=await User.findById(userId);
    if (!user){
      return res.status(400).json({
        success:false,
        message:"User doesnot exist"
      })
    }
    const ismatch=await bcrypt.compare(oldPassword,user.password);
    if (!ismatch){
      return res.status(400).json({
        success:false,
        message:"Incorrect password"
      })
    }
    const salt=await bcrypt.genSalt(10);
    const hashedpass=await bcrypt.hash(newPassword,salt);
    user.password=hashedpass;
    await user.save();

    return res.status(200).json({
      success:true,
      message:"Password changed successfully"
    });

    }catch(error){
        return res.status(400).json({
            message:`Unexpected error occured ${error}`
        })
    }
}
export default {
    registerUser,
    loginUser,
    logoutUser,
    changePassword
}
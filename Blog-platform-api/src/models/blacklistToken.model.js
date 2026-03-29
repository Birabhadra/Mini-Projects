import mongoose from "mongoose";

const blackListSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    }
})

blackListSchema.index({createdAt:1},{
    expireAfterSeconds:60*60*24*3//3 days
})

const tokenBlackList=mongoose.model("tokenBlackList",blackListSchema)

export default tokenBlackList;
import mongoose from "mongoose";
const commentSchema=new mongoose.Schema({
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    parentComment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
        default:null
    }    
},{
    timestamps:true
})

export default mongoose.model("comments",commentSchema)
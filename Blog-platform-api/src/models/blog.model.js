import mongoose from "mongoose";
const blogSchema =new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String
    },
    tags:{
        type:[String]
    },
    coverImage:{
        type:String
    },
    status:{
        type:String,
        enum:["draft","published"],
        default:"published"
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId
    }],
    viewsCount:{
        type:Number,
        default:0
    },
    commentsCount:{
        type:Number,
        default:0
    },
    readTime:Number

},{
    timestamps:true
})

export default mongoose.model("Blog",blogSchema)
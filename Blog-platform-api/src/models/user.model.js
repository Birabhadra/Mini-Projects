import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    middleName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    profilePic:{
        type:String
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        index:{
            sparse:true
        }
    },
    password:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    country:{type:String},
    language:{
        type:String,
        enum:['ENG'],
        default:"ENG"
    },
    authType: {
        type: String,
        enum: ['NORMAL','GOOGLE'],
        default: AuthType.NORMAL
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:"user"
    },
    savedBlogs:[{
        blog:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Blog"
        },
        savedAt:{
            type:Date,
            default:Date.now
        }
    }]
},{
    timestamps:true
});


export default mongoose.model("User",userSchema)
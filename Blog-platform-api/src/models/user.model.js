import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv"
dotenv.config()
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
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
        required:true,
        select:false
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
        default: 'NORMAL'
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:"user"
    },
    savedBlogs:{
        type:[{
        blog:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Blog"
        },
        savedAt:{
            type:Date,
            default:Date.now
        }
    }],
    default:[]}
},{
    timestamps:true
});
userSchema.pre("save",async function(){
    if(!this.isModified("password")){
        return
    }
    const hash=await bcrypt.hash(this.password,10)
    this.password=hash
    return

})

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

export default mongoose.model("User",userSchema)
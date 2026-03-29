import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import indexRouter from "./src/routes/index.js"
import connectMongo from "./src/config/db.js"
dotenv.config()
const PORT=process.env.PORT
const app=express();
app.use(express.json())
app.use(cookieParser());
app.get('/health',(req,res)=>{
	return res.status(200).json("❤️ Healthy");
});

app.use('/',indexRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
    connectMongo()
}
);

import express from "express"
import dotenv from "dotenv";
import indexRouter from "./src/routes/index.js"
dotenv.config()
const PORT=process.env.PORT
const app=express();
app.use(express.json())
app.get('/health',(req,res)=>{
	return res.status(200).json("❤️ Healthy");
});

app.use('/',indexRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
    }
);

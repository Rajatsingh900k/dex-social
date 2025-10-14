import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express();

//configurations:-
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true
}))//.use() method is used for configurations and middlewares

//data from json
app.use(express.json({limit:"16kb"}))

//data from url
app.use(express.urlencoded({extended:true, limit:"16kb"}))

//store data(files,pdfs,etc)
app.use(express.static("public"))

//cookie parser
app.use(cookieParser())

//routes import 
import userRouter from './routes/user.routes.js';

//routes declaration
app.use("/api/v1/users",userRouter)//prefix for route ex:- http://localhost:8000/api/v1/users/register
export {app};
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
export {app};
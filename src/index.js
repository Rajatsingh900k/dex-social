// require ('dotenv').config({path: './env'})
// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';

/*
first Approach to connect backend with DB
const app=express()

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(err)=>{
            console.log("Error: ", err);
            throw err;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listen on port ${process.env.PORT}`)
        })
    }catch(e){
        console.log("ERROR: ",e)
        throw e;
    }
})()*/

// Second Approach
// //connect on other file and iport here to avoid pollution on index.js

import connectDB from './db/index.js';
import dotenv from 'dotenv';
import { app } from './app.js';
dotenv.config({
    path:'./.env'
})

connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("Error: ",error);
        throw error;
    })
    app.listen(process.env.PORT||3000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MongoDB Connection Failed with error ", err);
});
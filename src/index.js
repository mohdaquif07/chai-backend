// require('dotenv').config({ path: './env' })

//  add this if connection error
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";









// console.log("--> MONGODB_URI IS:", process.env.MONGODB_URI);
connectDB()
    .then(
        () => {
            app.on("error", (error) => {
                console.log("error", error)
            })
            app.listen(process.env.PORT || 8000, () => {
                console.log(`server is running at port ${process.env.PORT}`)
            })
        }
    )
    .catch((err) => {
        console.log("mongo db conn failed")
    })













/*
import express from "express";
const app = express()


    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR: ", error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`app is listening on ${process.env.PORT}`)
            })
        } catch (error) {
            console.error("ERROR", error)
            throw error
        }
    })()   
         */
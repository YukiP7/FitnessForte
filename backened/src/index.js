import dotenv from "dotenv"
dotenv.config({path : './env'})

import connect_DB from "../src/db/index.js"
import express from "express" 

const app = express() 

connect_DB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection FAILED!! " , err);
})
import mongoose from "mongoose" 
import {DB_NAME} from "../constants.js"
import express from "express" 

const app = express() 

const connect_DB = async () => {
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB is connected successfully on DB HOST : ${connectionInstance.connection.host}`);

        app.on("error" , (err) => {
            console.log("Error: " , err);
            process.exit(1) ;
        })
    } catch (error) {
        console.log("MONGODB connection FAILED!! error: " , error);
        process.exit(1) ;
    }
}

export default connect_DB;
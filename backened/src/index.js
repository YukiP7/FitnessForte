import dotenv from "dotenv"
dotenv.config({path : './env'})

import connect_DB from "../src/db/index.js"

connect_DB();
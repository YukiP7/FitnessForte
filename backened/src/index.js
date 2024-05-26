import dotenv from "dotenv"
dotenv.config({path : './env'})

import connect_DB from "../src/db/index.js"
import express from "express" 

const app = express() 
const router = express.Router();

// Your existing routes and middleware
router.get('/your-route', (req, res) => {
  res.json({ message: 'Hello from Netlify Functions' });
});

app.use('/.netlify/functions/backend', router);

connect_DB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection FAILED!! " , err);
})

export const handler = serverless(app);
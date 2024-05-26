// functions/backend.js

import dotenv from 'dotenv';
import express from 'express';
import serverless from 'serverless-http';
import connect_DB from '../backend/src/db/index.js';

dotenv.config({ path: './.env' });

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for routes
const programs = [
    { id: 1, title: "Strength Training", description: "In this program, you are trained to improve your strength through many exercises." },
    { id: 2, title: "Cardio Training", description: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes." },
    { id: 3, title: "Fat Burning", description: "This program is suitable for you who wants to get rid of your fat and lose their weight." },
    { id: 4, title: "Health Fitness", description: "This program is designed for those who exercises only for their body fitness not body building." }
];

const workouts = [
    { id: 1, title: "Full Body Workout by Madfit", link: "https://youtu.be/IT94xC35u6k?si=rNgLWXzkz9gc-0XT", time: "22:17 min", difficulty: "Medium", imgAddress: "https://i.ytimg.com/vi/9WujK6Q2y1M/maxresdefault.jpg", equipment: "Dumbells, Mat" },
    { id: 2, title: "Lower Body Workout by MadFit", link: "https://youtu.be/zZ8tWnE8kzQ?si=fY6Ttu8EwG4iB13X", time: "21:26 min", difficulty: "Medium", imgAddress: "https://i.ytimg.com/vi/OLn3xfavAlw/maxresdefault.jpg", equipment: "Dumbells, Mat" },
    { id: 3, title: "Upper Body Workout by MadFit", link: "https://youtu.be/xxVRCzT2a1E?si=D5WKVBfDdh9eoalP", time: "21:23 min", difficulty: "Medium", imgAddress: "https://i.ytimg.com/vi/xxVRCzT2a1E/maxresdefault.jpg", equipment: "Dumbells, Mat" },
    { id: 4, title: "Full Body Workout by growingannanas", link: "https://youtu.be/cbKkB3POqaY?si=vDB910Wn-TMSwZmt", time: "28:19 min", difficulty: "Easy", imgAddress: "https://i.ytimg.com/vi/NTCvJg4Acho/maxresdefault.jpg", equipment: "No Equipment, Mat" },
    { id: 5, title: "Upper Body Workout by growingannanas", link: "https://youtu.be/WGA_ctAMkMk?si=ehl9jN0-eePvNu-l", time: "35:24 min", difficulty: "Easy", imgAddress: "https://i.ytimg.com/vi/P7k7ABUKmxo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFBOTbTEDB83oHbZPGMeyimq8SoQ", equipment: "No Equipment, Mat" },
    { id: 6, title: "Lower Body Workout by growingannanas", link: "https://youtu.be/dIJfQmcDlFE?si=FcOxjcG7D0pymgYq", time: "28:18 min", difficulty: "Easy", imgAddress: "https://i.ytimg.com/vi/YqjeH-HcNqs/maxresdefault.jpg", equipment: "No Equipment, Mat" }
];

// Define routes
app.get('/programs', (req, res) => {
    res.json(programs);
});

app.get('/workouts', (req, res) => {
    res.json(workouts);
});

// Connect to database
connect_DB()
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection FAILED!!', err);
    });

export const handler = serverless(app);

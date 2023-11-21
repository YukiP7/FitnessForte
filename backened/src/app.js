import express from "express" 
// import FontAwesome from "@fortawesome/react-fontawesome"
// import {faDumbell , faPersonRunning , faFireFlameCurved , faHeartPulse} from "react-icons"

const app = express() ;
const port = 3000 ;

const prog = [
    {
        id: 1 ,
        // icon: <FontAwesome icon = {faDumbell} size='2xl' /> ,
        title: "Strength Training",
        description: "In this program, you are trained to improve your strength through many exercises."
    },
    {
        id: 2 ,
        // icon: <FontAwesome icon = {faPersonRunning} size='2xl' />  ,
        title: "Cardio Training" ,
        description: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes."
    },
    {
        id: 3 ,
        // icon: <FontAwesome icon = {faFireFlameCurved} size='2xl' />,
        title: "Fat Burning" ,
        description: "This  program  is  suitable  for  you who wants to get rid of your fat and lose their weight." 
    },
    {
        id: 4 ,
        // icon: <FontAwesome icon = {faHeartPulse} size='2xl' />,
        title: "Health Fitness" ,
        description: "This programs is designed for those who exercises only for their body fitness not body building."
    }
]
app.get('/programs' , (req , res) => {
    res.send(prog) 
})

const work = [
    {
        id: 1 ,
        title: "Full Body Workout by Madfit" ,
        link: "https://youtu.be/IT94xC35u6k?si=rNgLWXzkz9gc-0XT",
        time: "22:17 min" ,
        difficulty : "Medium" ,
        imgAddress : "https://i.ytimg.com/vi/9WujK6Q2y1M/maxresdefault.jpg",
        equipment: "Dumbells , Mat"
    }, 
    {
        id: 2 ,
        title: "Lower Body Workout by MadFit" ,
        link: "https://youtu.be/zZ8tWnE8kzQ?si=fY6Ttu8EwG4iB13X",
        time: "21:26 min",
        difficulty : "Medium" ,
        imgAddress: "https://i.ytimg.com/vi/OLn3xfavAlw/maxresdefault.jpg",
        equipment: "Dumbells , Mat"
    }, 
    {
        id: 3 ,
        title: "Upper Body Workout by MadFit" ,
        link: "https://youtu.be/xxVRCzT2a1E?si=D5WKVBfDdh9eoalP",
        time: "21:23 min",
        difficulty : "Medium" ,
        imgAddress: "https://i.ytimg.com/vi/xxVRCzT2a1E/maxresdefault.jpg",
        equipment: "Dumbells , Mat"
    }, 
    {
        id: 4 ,
        title: "Full Body Workout by growingannanas" ,
        link: "https://youtu.be/cbKkB3POqaY?si=vDB910Wn-TMSwZmt",
        time: "28:19 min" ,
        difficulty : "Easy" ,
        imgAddress: "https://i.ytimg.com/vi/NTCvJg4Acho/maxresdefault.jpg",
        equipment: "No Equipment , Mat"
    }, 
    {
        id: 5,
        title: "Upper Body Workout by growingannanas" ,
        link: "https://youtu.be/WGA_ctAMkMk?si=ehl9jN0-eePvNu-l",
        time: "35:24 min" ,
        difficulty : "Easy" ,
        imgAddress: "https://i.ytimg.com/vi/P7k7ABUKmxo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFBOTbTEDB83oHbZPGMeyimq8SoQ",
        equipment: "No Equipment , Mat"
    }, 
    {
        id: 6 ,
        title: "Lower Body Workout by growingannanas" ,
        link: "https://youtu.be/dIJfQmcDlFE?si=FcOxjcG7D0pymgYq",
        time: " 28:18 min" ,
        difficulty : "Easy" ,
        imgAddress: "https://i.ytimg.com/vi/YqjeH-HcNqs/maxresdefault.jpg",
        equipment: "No Equipment , Mat"
    }, 

]

app.get('/workouts' , (req , res) => {
    res.send(work) 
})

app.listen(port , () => {
    console.log(`Server is ready at http://localhost:${port}`);
})

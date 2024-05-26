import React, { useEffect } from "react";
import axios from "axios" ;
import { useState } from "react";

 function Workout(){
    const [workouts , setWorkouts] = useState([]) 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/workouts');
            setWorkouts(response.data);
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchData();
      }, []);

    return(
        <div className="  bg-gradient-to-bl from-blue-200 to-pink-200 p-10 ">
            <h1 className=" font-tourney text-blue-950 p-10 text-5xl text-center">WORKOUT WITH TOP FITNESS <span className="font-mono">TRAINERS</span></h1>

            <div className="flex flex-wrap w-full justify-center  h-auto">
                {
                    workouts.map((workout , id) => (
                <div className=" h-auto w-96 bg-white  rounded-xl m-4 p-10 hover:bg-gradient-to-tl from-red-400 to-blue-600 "
                onClick={() => window.open(workout.link, '_blank')}
                key={workout.id}>
                    <div className=" h-52 w-full mb-2">
                        <img src={workout.imgAddress} alt="workout" className="bg-cover"/>
                    </div>
                    <h2 className=" text-xl font-medium  mt-3 mb-2">{workout.title}</h2>
                    <p className="mb-2 text-blue-800">{workout.time}</p>
                    <p><span className="font-medium mb-1">Difficulty :</span> {workout.difficulty}</p>
                    <p><span className="font-medium mb-2" >Equipment Required :</span> {workout.equipment}</p>
                    
                </div>
                    ))
                }
                {
                    workouts.map((workout , id) => (
                <div className=" h-auto w-96 bg-white rounded-xl m-4 p-10 hover:bg-gradient-to-tl from-red-400 to-blue-600" key={workout.id}>
                    <div className=" h-52 w-full mb-2">
                        <img src={workout.imgAddress} alt="workout" className="bg-cover"/>
                    </div>
                    <h2 className=" text-xl font-medium mt-3 mb-2">{workout.title}</h2>
                    <p className="mb-2 text-blue-800">{workout.time}</p>
                    <p><span className="font-medium mb-1">Difficulty :</span> {workout.difficulty}</p>
                    <p><span className="font-medium mb-2" >Equipment Required :</span> {workout.equipment}</p>
                </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Workout;

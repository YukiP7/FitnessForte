import React, { useEffect } from "react";
import axios from "axios" ;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightLong} from "@fortawesome/free-solid-svg-icons"

 function Program(){
    const [programs , setPrograms] = useState([]) 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/programs');
            setPrograms(response.data);
          } catch (err) {
            console.error(err);
          }
        };
    
        fetchData();
      }, []);

    return(
        <div className="  bg-gradient-to-bl from-blue-200 to-pink-200 p-10 ">
            <h1 className=" font-tourney text-blue-950 p-10 text-5xl text-center">EXPLORE OUR <span className=" font-mono">PROGRAMS</span> TO SHAPE YOU</h1>

            <div className="flex flex-wrap w-full justify-center  h-auto">
                {
                    programs.map((program , id) => (
                <div className=" h-64 w-96 bg-white  rounded-xl m-4 p-10 hover:bg-gradient-to-tl from-red-400 to-blue-600" key={program.id}>
                    <h2 className=" text-2xl font-medium mb-2">{program.title}</h2>
                    <p className="mb-10">{program.description}</p>
                    <div className="flex justify-between text-xl text-black items-center">
                        <p>Join Now</p>
                        <FontAwesomeIcon icon={faRightLong} size="xl" className="mt-2"/>
                    </div>
                </div>
                    ))
                }
                {
                    programs.map((program , id) => (
                <div className=" h-64 w-96 bg-white rounded-xl m-4 p-10 hover:bg-gradient-to-tl from-red-400 to-blue-600" 
                key={program.id} >
                    <h2 className=" text-2xl font-medium mb-2">{program.title}</h2>
                    <p className="mb-10">{program.description}</p>
                    <div className="flex justify-between text-xl text-black items-center">
                        <p>Join Now</p>
                        <FontAwesomeIcon icon={faRightLong} size="xl" className="mt-2"/>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Program ;

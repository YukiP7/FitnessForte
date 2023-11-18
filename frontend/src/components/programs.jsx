import React from "react";

export default function Program(){
    return(
        <div className="  bg-gradient-to-bl from-blue-200 to-pink-200 p-10 ">
            <h1 className=" font-tourney text-blue-950 p-10 text-5xl text-center">EXPLORE OUR <span className=" font-mono">PROGRAMS</span> TO SHAPE YOU</h1>

            <div className="flex flex-wrap w-full justify-center">
                <div className=" h-64 w-96 bg-white m-4 p-10">

                    <h2>Strength Training</h2>
                    <p>In this program , you are trained to improve your strength through many exercises.</p>
                </div>
                <div className=" h-64 w-96 bg-white m-4 p-10">one</div>
                <div className=" h-64 w-96 bg-white m-4 p-10">one</div>
                <div className=" h-64 w-96 bg-white m-4 p-10">one</div>
            </div>
        </div>
    )
}
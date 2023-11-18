import React from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleChevronRight} from "@fortawesome/free-solid-svg-icons"

export default function Home(){
    return(
    <div className="  bg-gradient-to-br from-blue-300 to-pink-200 p-20">
        <div className="flex">
        <div className="m-5 ml-0">
            <div className=" w-1/2 h-16 bg-blue-100 rounded-3xl flex justify-center items-center hover:bg-slate-300  hover:animate-bounce delay-150" >
                <h1 className="text-2xl">THE BEST FITNESS WEBSITE</h1>
            </div>
            <p className="text-blue-950 text-7xl pr-0 pb-10 pl-0 font-tourney w-1/2 pt-16">SHAPE 
            <span className="font-semibold font-mono"> YOUR IDEAL</span> BODY </p>

            <pre className=" text-xl font-mono ">In  here  we  will  help  you  to  shape  and  build  your  ideal  body  and  <br/>live  up  your life  to  fullest</pre>
        </div>

        <div className="m-5 mr-0  w-1/2"> 
            <img src="../assests/heroImg.png" alt="fitness"
            className=" h-86 bg-cover rounded-lg" />
        </div>
        </div>

        <div className="flex gap-12 text-lg pt-20">
            <div className="flex flex-col" >
                <p className="text-center text-3xl">+140</p>
                <p className=" text-gray-800 pt-1">EXPERT TRAINERS</p>
            </div>
            <div className="flex flex-col" >
                <p  className="text-center text-3xl">+900</p>
                <p className=" text-gray-800 pt-1"> MEMBERS JOINED </p>
            </div>
            <div className="flex flex-col" >
                <p  className="text-center text-3xl">+20</p>
                <p className=" text-gray-800 pt-1">PROGRAMS</p>
            </div>
        </div>

        <div className="flex gap-5 pt-20 justify-center">
        <Link
            to="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-b-4 border-l-4 border-2 border-black hover:border-none duration-200 flex gap-2"
        >
            <p>GET STARTED </p>
            <FontAwesomeIcon icon={faCircleChevronRight} className="pt-1"/>
        </Link>
        <Link
            to="#"
            className=" bg-slate-200  p-2  focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-b-4 border-l-4 border-2 border-black hover:border-none duration-200 "
        >
            PRICING
        </Link>
        </div>

        <div className="flex flex-col border-4 border-b-0 border-white rounded-xl bg-gradient-to-b from-white to-pink-100 h-auto  mt-36 p-5  ">
            <div className="flex flex-col justify-center items-center">
            <p className=" font-semibold text-5xl p-5">Learn more from our Users</p>
            <p className=" text-gray-800 text-xl pt-0 pb-5">We ask health , fitness and wellness Users to share their wisdom from their own journey to success. </p>
            <Link
            to="#"
            className=" bg-slate-200  p-2  focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none border-b-8 border-l-8 border-2 border-black hover:border-none duration-200 flex gap-2"
        >
             <p>Explore the stories  </p>
            <FontAwesomeIcon icon={faCircleChevronRight} className="pt-1"/>
        </Link>
            </div>
            

        <div className="grid grid-cols-4 gap-12 mt-9 max-lg:grid-cols-2  max-lg:gap-4  max-lg:px-3 m-5 mb-10">
                <div className=" hover:translate-y-8 duration-150">
                    <img src="../assests/person1.png" alt="person1" className=" h-86 bg-cover rounded-lg"/>
                </div>
                <div className=" pt-20 hover:translate-y-8 duration-150">
                    <img src="../assests/person2.png" alt="person2" className=" h-86 bg-cover rounded-lg"/>
                </div>
                <div className=" pt-20 hover:translate-y-8 duration-150">
                    <img src="../assests/person3.png" alt="person3" className=" h-86 bg-cover rounded-lg"/>
                </div>
                <div className=" hover:translate-y-8 duration-150">
                    <img src="../assests/person4.png" alt="person4"
                    className=" h-86 bg-cover rounded-lg"/>
                </div>
            
            </div>
        </div>

        <div className="mt-36 w-full p-5 flex items-center">
            <div>
            <h1 className=" font-semibold text-blue-950 text-2xl">EXCITING FEATURE...</h1>
            <p className="pt-2 font-mono text-lg ">Share with your friends and unlock the Free Forever Meal plan</p>
            <p className="pt-2">Share Website and get Streak upto 200 and Unlock the chance of getting Free Meal Plan By experts .</p>
            </div>

            <div className="h-26 w-1/2">
                <img src="https://blogs.egusd.net/digitalcitizenship/files/2021/08/social4-1024x670.png" alt="social Sharing"  className=" bg-cover"/>
            </div>
            
        </div>


    </div>
    )
}
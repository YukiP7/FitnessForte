import React from "react";
import { NavLink } from "react-router-dom";

export default function Login(){
    return(
        <div className=" bg-gradient-to-tl from-red-200 to-blue-200 flex justify-center items-center flex-col ">
            <p className=" text-3xl font-semibold mt-12 mb-12 ">Time to Resume</p>
             <div className=' w-1/2  flex justify-center items-center '>
            <div className="container w-full m-5 mt-0 ">
            <div className="w-full border border-gray-60 rounded-lg p-5 h-auto bg-white ">
            <form className="p-4 pt-0 flex flex-col justify-center m-3 ">

                <div className="flex flex-col mt-2">
                    <label for="email" >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Insert your email"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black  focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mt-2">
                    <label for="pass">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Insert your password"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black  focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="md:w-auto bg-blue-500 hover:bg-blue-dark font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-600 transition ease-in-out duration-300 text-white "
                >
                    Login 
                </button>

                <div className="flex text-sm">
                <p className='m-2'>Don't have an account? </p>
                <NavLink to='/signup' className=' hover:underline mt-2' >Sign up</NavLink>
                </div>

                <p className='text-center text-blue-950 text-md'>-OR-</p>

                <button className='w-100 mt-2 py-3 px-3 rounded-lg bg-white/5 border-b border-b-black font-semibold focus:border-blue-500 focus:outline-none flex justify-center gap-1 hover:bg-blue-500 hover:text-white duration-150'>
                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="Google" className='h-5 m-1 rounded '/>
                 Login with Google
                </button>

            </form>
            </div>
            </div>
            </div>
        </div>
    )
}
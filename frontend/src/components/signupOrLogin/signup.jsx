import React from 'react';
import {NavLink} from 'react-router-dom';

export default function SignUp(){
    return(
        <div className=" bg-gradient-to-tl from-red-200 to-blue-200 flex flex-col justify-center items-center">
            <h1 className=' font-semibold m-10 mb-5 text-3xl'>Time to sign up</h1>
            <p className='text-xl'>Send over your deets in the form below 🤘</p>
            <div className=' w-1/2 mt-10 flex justify-center items-center'>
            <div className="container w-full m-20 mt-0">
            <div className="w-full border border-gray-60 rounded-lg p-5 h-auto bg-white/95">
            <form className="p-4 pt-0 flex flex-col justify-center ">
                <div className="flex flex-col mt-2">
                    <label for="name">
                        Full Name
                    </label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Insert your name "
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black  font-semibold focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mt-2">
                    <label for="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Insert your email "
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black  font-semibold focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col mt-2">
                    <label for="tel">
                        Number
                    </label>
                    <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder=" Insert your phone number"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black font-semibold focus:border-blue-500 focus:outline-none"
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
                        placeholder=" Set Password"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-2 border-black font-semibold focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="md:w-auto bg-blue-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-600 transition ease-in-out duration-300 "
                >
                    Create Account
                </button>

                <div className="flex text-sm">
                <p className='m-2'>Already have an account? </p>
                <NavLink to='/login' className=' hover:underline mt-2' >Login</NavLink>
                </div>

                <p className='text-center text-blue-950 text-md'>-OR-</p>

                <button className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border-b border-b-black text-black font-semibold focus:border-blue-500 focus:outline-none flex justify-center gap-1 hover:bg-blue-500 hover:text-white duration-150'>
                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="Google" className='h-5 m-1 rounded '/>
                Sign up with Google
                </button>

            </form>
            </div>
            </div>
            </div>
       </div>
    )
}
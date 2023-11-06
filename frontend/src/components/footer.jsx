import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className="bg-black border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-center">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline" >
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Facebook
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-sm text-gray-500 sm:text-center">
                        &copy; 2023
                        <a href="https://github.com/YukiP7/FitnessForte.git" className="hover:underline">
                            FitnessForte.com
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}
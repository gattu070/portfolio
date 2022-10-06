import React from 'react';
import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full animate__animated animate__fadeInDown">
            <div className="container justify-between px-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                            <h2 className="text-3xl font-bold text-gradient">
                                Gautam
                            </h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 md:block md:pb-0 transition ease-in-out delay-150 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center gap-5 md:flex md:space-x-6 md:space-y-0 md:text-center">
                            <li className="nav-links">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li className="nav-links">
                                <a href="javascript:void(0)">About me</a>
                            </li>
                            <li className="nav-links">
                                <a href="javascript:void(0)">Projects</a>
                            </li>
                            <li className="nav-links">
                                <a href="javascript:void(0)">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}

import React from 'react';

const AppBar = () => {
    return (
        <div>
            <nav className="bg-zinc-800 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-xl font-bold">
                        <a href="/"> Sharath M S</a>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <a href="/projects" className="text-white hover:text-gray-200">Projects</a>
                        <a href="/skills" className="text-white hover:text-gray-200">Skills</a>
                        <a href="" className="text-white hover:text-gray-200">Resume</a>
                        <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
                    </div>

                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AppBar;

import React, { useState } from 'react';

const AppBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="bg-zinc-800 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-xl font-bold px-4 py-2">
                        <a href="/">Sharath M S</a>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <a href="/projects" className="text-white hover:text-gray-200">Projects</a>
                        <a href="/skills" className="text-white hover:text-gray-200">Skills</a>
                        <a href="https://drive.google.com/file/d/1F0EKYXK-z9z4vE_BZCW143n3MdF3hWd3/view?usp=sharing" className="text-white hover:text-gray-200">Resume</a>
                        <a href="/contact" className="text-white hover:text-gray-200">Contact Me</a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
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

            {isOpen && (
                <div className="absolute left-0 right-0 bg-zinc-800 p-4 z-50">
                    <div className="flex flex-col space-y-2">
                        <a href="/projects" className="text-white hover:text-gray-200 px-4 py-2" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="/skills" className="text-white hover:text-gray-200 px-4 py-2" onClick={() => setIsOpen(false)}>Skills</a>
                        <a href="https://drive.google.com/file/d/1F0EKYXK-z9z4vE_BZCW143n3MdF3hWd3/view?usp=sharing" className="text-white hover:text-gray-200 px-4 py-2" onClick={() => setIsOpen(false)}>Resume</a>
                        <a href="/contact" className="text-white hover:text-gray-200 px-4 py-2" onClick={() => setIsOpen(false)}>Contact Me</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppBar;

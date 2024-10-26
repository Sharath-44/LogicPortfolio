import React, { useState } from 'react';
import { FaGithub, FaFilePdf } from 'react-icons/fa'; // Import icons
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

const EventManagementApp = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prevState => !prevState);
    };

    return (
        <div>
            <AppBar />
            <div
                className="grid h-full w-full place-items-center text-zinc-800"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                }}
            >
                <div className="bg-zinc-900 p-8 rounded-lg shadow-lg text-white w-11/12 md:w-3/4 lg:w-1/2 space-y-6 my-8">
                    <h2 className="text-2xl font-semibold mb-4">Event Management App</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <img src="/eventmanagement/3.png" alt="Main Project Display" className="w-full md:w-1/2 rounded-lg shadow-md" />

                        <div className="md:w-1/2 space-y-4">
                            <p>The Event Management System is a standalone mobile application designed to facilitate event planning and coordination. It serves as a centralized platform for users to create, modify, and manage events. Additionally, users can sign up, log in, log out, RSVP for events, and view a homepage displaying all upcoming events. The system is self-contained and does not have direct dependencies on external systems.</p>
                            <div className="flex items-center space-x-4 mb-6">
                                <a href="https://github.com/Sharath-44/Event-Management-App" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 underline">
                                    <FaGithub className="mr-2" /> GitHub
                                </a>
                                <a href="https://github.com/Sharath-44/Event-Management-App/blob/main/Design%20Document.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-300 underline">
                                    <FaFilePdf className="mr-2" /> Design Document
                                </a>
                            </div>
                            <h3 className="text-lg font-medium">Key Features:</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Add Event: Users can create and submit new events with essential details.</li>
                                <li>Modify/Delete Event: Users can update information for existing events.</li>
                                <li>Sign Up: New users can create accounts to access the system.</li>
                                <li>Log In/Log Out: Secure authentication for users to access their accounts.</li>
                                <li>RSVP for Events: Users can indicate their attendance for specific events.</li>
                                <li>Homepage Display: A list of all upcoming events is shown on the homepage for easy access.</li>
                                <li>Interactive design for an engaging user experience</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">More Screenshots:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {/* Only show the first 2 images by default, show all if showAll is true */}
                            <img src="/eventmanagement/1.png" alt="Analysis Model" className="rounded-lg shadow-md" />
                            <img src="/eventmanagement/2.png" alt="Event Display" className="rounded-lg shadow-md" />
                            {showAll && (
                                <>
                                    <img src="/eventmanagement/4.png" alt="Event Display" className="rounded-lg shadow-md" />
                                    <img src="/eventmanagement/5.png" alt="Event Display" className="rounded-lg shadow-md" />
                                    <img src="/eventmanagement/6.png" alt="Event Display" className="rounded-lg shadow-md" />
                                </>
                            )}
                        </div>

                        {/* Show more/less toggle */}
                        <button
                            onClick={toggleShowAll}
                            className="text-blue-400 underline mt-4 focus:outline-none"
                        >
                            {showAll ? 'Show less...' : 'Show more...'}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventManagementApp;

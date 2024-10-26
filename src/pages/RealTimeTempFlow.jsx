import React, { useState } from 'react';
import { FaGithub, FaFilePdf } from 'react-icons/fa'; // Import icons
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

const RealTimeTempFlow = () => {
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
                    <h2 className="text-2xl font-semibold mb-4">RealTime TempFlow: Stream and Batch Processing of Water Quality</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <img
                            src="/tempflow/5.png"
                            alt="Main Project Display"
                            className="w-full md:w-1/2 rounded-lg shadow-md object-contain"
                        />
                        <div className="md:w-1/2 space-y-4">

                            <p>A real-time data pipeline utilizing Apache Kafka and Apache Spark to handle and analyze water quality data. The primary goal is to demonstrate effective real-time data processing compared to traditional batch processing, using simulated sensor data to model water quality metrics.</p>

                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <a href="https://github.com/Sharath-44/Real-Time-Data-Pipeline-Using-Kafka-and-Spark" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 underline">
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                        <a href="https://github.com/Sharath-44/Real-Time-Data-Pipeline-Using-Kafka-and-Spark/blob/main/DBT%2021CS343%20ProjRpt_512_538_555_902.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-300 underline">
                            <FaFilePdf className="mr-2" /> Project Report
                        </a>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Key Features:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Built the pipeline supports real-time data analytics and machine learning operations on the incoming sensor data.</li>
                            <li>MongoDB stores the processed sensor data, a NoSQL database solution suitable for handling large volumes of real-time data.</li>
                            <li>Kafka, Spark, and MongoDB, allowing users to observe a scalable and fault-tolerant data pipeline model suitable for modern data applications.</li>
                            <li>A dashboard component visualizes the real-time processed data, enabling users to observe sensor data and insights in an easily digestible format.</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">More Screenshots:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {/* Only show the first 2 images by default, show all if showAll is true */}
                            <img src="/tempflow/2.png" alt="Analysis Model" className="rounded-lg shadow-md" />
                            <img src="/tempflow/3.png" alt="Event Display" className="rounded-lg shadow-md" />
                            {showAll && (
                                <>
                                    <img src="/tempflow/4.png" alt="Event Display" className="rounded-lg shadow-md" />
                                    <img src="/tempflow/5.png" alt="Event Display" className="rounded-lg shadow-md" />
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

export default RealTimeTempFlow;

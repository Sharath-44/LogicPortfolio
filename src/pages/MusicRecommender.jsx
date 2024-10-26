import React, { useState } from 'react';
import { FaGithub, FaFilePdf } from 'react-icons/fa'; // Import icons
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

const MusicRecommender = () => {
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
                    <h2 className="text-2xl font-semibold mb-4">Movement-Inspired Music Recommendation: Leveraging Bidirectional LSTM and GRU Networks</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <img
                            src="/musicRec/fig1a.png"
                            alt="Main Project Display"
                            className="w-full md:w-1/2 rounded-lg shadow-md object-contain"
                        />
                        <div className="md:w-1/2 space-y-4">

                            <p>A Music Recommendation System that utilizes human movement for personalized suggestions. The system captures complex movements and emotional components of body language from skeletal data in input videos. It achieves an F1 score of 0.98 in music recommendations based on this analysis, demonstrating the potential of human motion analysis to enhance music recommendation algorithms and create engaging musical experiences.</p>

                        </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                        <a href="https://github.com/Sharath-44/Movement-Based-Music-Recommender-System" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 underline">
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Key Features:</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>High Performance Light Weight Model: The study achieved a high F1 score of 0.98, indicating excellent model performance in evaluating dance and music interactions.</li>
                            <li>Bidirectional Neural Networks: Both bidirectional LSTM and GRU architectures are employed to capture temporal dependencies in sequential data, allowing the model to process input in both forward and backward directions.</li>
                            <li>Handling Variable Length Sequences: Bidirectional LSTM and GRU networks can handle sequences of varying lengths without the need for padding or truncation, which is crucial for accurately capturing the temporal dynamics of dance performances.</li>
                            <li>Data Source: Data was collected from YouTube videos, leveraging existing dance and music performances for analysis.</li>
                            <li>Cosine Similarity: The study used cosine similarity to assess the relationships between dance movements and music characteristics, contributing to the recommendation system's effectiveness.</li>
                            <li>"The Movement-Inspired Music Recommendation: Leveraging Bidirectional LSTM and GRU Networks" (submitted to IEEE Access, Manuscript ID: Access-2024-24190) </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">More Screenshots:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {/* Only show the first 2 images by default, show all if showAll is true */}
                            <img src="/musicRec/fig6.png" alt="Analysis Model" className="rounded-lg shadow-md" />
                            <img src="/musicRec/architecture.jpg" alt="Event Display" className="rounded-lg shadow-md" />
                            {showAll && (
                                <>
                                    <img src="/musicRec/confusion.jpg" alt="Event Display" className="rounded-lg shadow-md" />
                                    <img src="/musicRec/fig9.png" alt="Event Display" className="rounded-lg shadow-md" />
                                    <img src="/musicRec/fig2.jpg" alt="Event Display" className="rounded-lg shadow-md" />
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

export default MusicRecommender;

import React from "react";

const Education = () => {
    return (
        <div
            className="grid h-full w-full place-items-center"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
        >
            <div className="bg-zinc-800 text-white max-w-4xl mx-auto my-8 px-4 sm:px-6 py-8 rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Education</h2>

                <div className="border-b border-zinc-600 pb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h3 className="text-lg sm:text-xl font-semibold">PES University | Bangalore, India</h3>
                        <h3 className="text-md sm:text-lg">2021 - 2025</h3>
                    </div>
                    <p className="italic mt-2">Bachelor of Technology in Computer Science and Engineering</p>
                    <p className="mt-2">Coursework: Machine Intelligence, Database Technologies, Operating Systems, Computer Networks, Data Structures and Algorithms</p>
                </div>

                <div className="mt-4 border-b border-zinc-600 pb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h3 className="text-lg sm:text-xl font-semibold">Sri Chaitanya PU College | Bangalore, India</h3>
                        <h3 className="text-md sm:text-lg">2019 - 2021</h3>
                    </div>
                    <p className="italic mt-2">Pre-University Course</p>
                    <p className="mt-2">Physics, Chemistry, Mathematics, Electronics</p>
                </div>

                <div className="mt-4 mb-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h3 className="text-lg sm:text-xl font-semibold">Mirambika School For New Age | Bangalore, India</h3>
                        <h3 className="text-md sm:text-lg">2018 - 2019</h3>
                    </div>
                    <p className="italic mt-2">Central Board of Secondary Education</p>
                </div>
            </div>
        </div>
    );
};

export default Education;

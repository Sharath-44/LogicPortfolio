import React from 'react';

const ProfileCard = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div
        className="w-full max-w-7xl p-8 bg-zinc-800 text-white flex flex-col md:flex-row items-center md:items-start md:space-x-12 rounded-lg"
      >
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/4"> {/* Reduced width from 1/3 to 1/4 */}
          <img
            className="rounded-lg w-full h-auto object-cover"
            src="/Sharath.jpg" // Replace with the correct image URL
            alt="Profile"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-3/4 mt-8 md:mt-0"> 
          <p className="uppercase tracking-wide text-sm text-gray-400">Bro... Who's this??</p>
          <h1 className="text-6xl font-bold mt-2">Sharath M S</h1>
          <h1 className="text-3xl font-bold mt-2">
            Currently, I’m a Senior student at PES University...
          </h1>
          <p className="mt-4">
            In my 7th semester of Bachelor of Technology in Computer Science Engineering at
            <span className="font-semibold text-indigo-400"> PES University</span>. <br />I was also an intern at
            <span className="font-semibold text-indigo-400"> Seventh Sense Talent Solutions</span> and
            <span className="font-semibold text-indigo-400"> Center of Data Science and Applied Machine Learning</span>.
          </p>
          <p className="mt-6">
            Want to hire me?
            <a href="mailto:sharath.shashidhara@gmail.com" className="text-indigo-400 underline">
              <br />Drop me a line.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

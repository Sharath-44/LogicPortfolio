import React from 'react';

const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'C++', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
            { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
            { name: 'C', icon: 'https://cdn-icons-png.flaticon.com/512/732/732047.png' },
            { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
            { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
            { name: 'SQL', icon: 'https://cdn-icons-png.flaticon.com/512/331/331488.png' },
            { name: 'NoSQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
            { name: 'Dart', icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png' },
            { name: 'R', icon: 'https://cdn-icons-png.flaticon.com/512/919/919832.png' },
            { name: 'MATLAB', icon: 'https://cdn-icons-png.flaticon.com/512/919/919832.png' },
            { name: 'HTML5', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
            { name: 'CSS3', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
        ],
    },
    {
        category: 'Frameworks',
        skills: [
            { name: 'TensorFlow', icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png' },
            { name: 'Keras', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png' },
            { name: 'Pytorch', icon: 'https://cdn-icons-png.flaticon.com/512/919/919831.png' },
            { name: 'ReactJS', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
            { name: 'NodeJS', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
            { name: 'ExpressJS', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
            // Add more frameworks with icons here...
        ],
    },
    {
        category: 'Tools and Technologies',
        skills: [
            { name: 'GIT', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
            { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/919/919832.png' },
            { name: 'Docker', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
            { name: 'Kubernetes', icon: 'https://cdn-icons-png.flaticon.com/512/919/919831.png' },
            // Add more tools and technologies here...
        ],
    },
    {
        category: 'Databases and OS',
        skills: [
            { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png' },
            { name: 'MongoDB', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
            { name: 'Windows', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
            { name: 'Linux', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
        ],
    },
];

const Skills = () => {
    return (
        <section className="bg-black text-white py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
            <p className="text-center mb-12 text-lg">
                What I work with...
            </p>

            {skillsData.map((section, index) => (
                <div key={index} className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4">{section.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {section.skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg flex flex-col items-center text-center transition-all duration-300"
                            >
                                <img src={skill.icon} alt={`${skill.name} logo`} className="w-12 h-12 mb-2" />
                                <h4 className="text-xl font-medium">{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;

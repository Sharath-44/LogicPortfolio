import React from 'react';

const skillsData = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'C++', icon: '/c++.png' },
            { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
            { name: 'C', icon: '/letter-c.png' },
            { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
            { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
            { name: 'NoSQL', icon: 'https://cdn-icons-png.flaticon.com/512/331/331488.png' },
            { name: 'SQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
            { name: 'Dart', icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png' },
            { name: 'R', icon: '/r.png' },
            { name: 'MATLAB', icon: 'https://cdn-icons-png.flaticon.com/512/874/874819.png' },
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
            { name: 'Apache Spark', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965250.png' },
            { name: 'Apache Kafka', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
            { name: 'PySpark', icon: 'https://cdn-icons-png.flaticon.com/512/1199/1199124.png' },
            { name: 'Flutter', icon: 'https://cdn-icons-png.flaticon.com/512/888/888839.png' },
            { name: 'Flask', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
            { name: 'Firebase', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
            { name: 'JSON', icon: 'https://cdn-icons-png.flaticon.com/512/595/595952.png' },
            { name: 'jQuery', icon: 'https://cdn-icons-png.flaticon.com/512/919/919831.png' },
            { name: 'Postman', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
            { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/919/919845.png' },
            { name: 'VS Code', icon: '/visual-studio.png' },
            { name: 'Agile', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
        ],
    },
    {
        category: 'Tools and Technologies',
        skills: [
            { name: 'GIT', icon: '/social.png' },
            { name: 'GitHub', icon: '/github.png' },
            { name: 'Docker', icon: '/docker.png' },
            { name: 'Kubernetes', icon: 'https://cdn-icons-png.flaticon.com/512/919/919831.png' },
            { name: 'AWS', icon: '/web.png' },
            { name: 'JIRA', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
            { name: 'Jenkins', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
        ],
    },
    {
        category: 'Databases and OS',
        skills: [
            { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
            { name: 'MongoDB', icon: '' },
            { name: 'Windows', icon: '/windows.png' },
            { name: 'Linux', icon: 'https://cdn-icons-png.flaticon.com/512/226/226772.png' },
            { name: 'Neo4j', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
        ],
    },
];


const Skills = () => {
    return (
        <section
            className="min-h-screen flex justify-center items-center px-4 bg-white text-white py-16"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
        >
            <div className="container max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-8 animate-fadeIn text-zinc-800">Skills</h2>
                <p className="text-center mb-12 text-lg text-zinc-800">What I work with...</p>

                {skillsData.map((section, index) => (
                    <div key={index} className="mb-16">
                        <h3 className="text-2xl font-semibold mb-6 text-zinc-800">{section.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {section.skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="bg-zinc-800 hover:bg-zinc-700 p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.name} logo`}
                                        className="w-14 h-14 mb-4 transition-transform duration-300 transform hover:rotate-12"
                                    />
                                    <h4 className="text-lg font-medium">{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

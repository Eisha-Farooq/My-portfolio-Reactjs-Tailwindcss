import React from 'react';
import { PROJECTS } from '../constants'; // Ensure this path is correct based on your project structure

const Projects = () => {
    return (
        <section id='projects' className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-t from-red-400 to-blue-400 bg-clip-text text-transparent">
                    PROJECTS
                </h2>
                <p className="text-md lg:text-xl p-5 text-center text-white mb-8 mx-auto max-w-3xl">
                    Here are some of my recent projects that showcase my skills and expertise. 
                    Each project highlights my ability to deliver high-quality, user-friendly solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex-1 min-w-[400px] max-w-[550px] border border-none rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-gray-900 text-white"
                        >
                            <div className="px-6 pt-6"> 
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 rounded-xl object-cover"
                                />
                            </div>
                            <div className="p-4 px-7">
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                            </div>
                            
                            {/* Hover Content */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                <p className="text-white mb-4">{project.description}</p>
                                <a
                                    href={project.githubLink} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-900 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-opacity duration-300"
                                >
                                    Visit Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

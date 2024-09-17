import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaGithub, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiNetlify, SiCanva } from 'react-icons/si';

const Skills = () => {
    return (
        <section id='skills' className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-t from-red-400 to-blue-400 bg-clip-text text-transparent">
                    MY SKILLS
                </h2>
                <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                    I have a diverse skill set that includes both design and development tools.
                    Below are some of the key technologies I work with.
                </p>
                <div className="flex flex-col items-center">
                    {/* Row 1 */}
                    <div className="flex justify-between w-full max-w-3xl mb-12">
                        <div className="flex flex-col items-center w-1/4">
                            <FaHtml5 className="text-7xl text-orange-500 mb-2" />
                            <span className="text-lg text-white">HTML5</span>
                        </div>
                        <div className="flex flex-col items-center w-1/4">
                            <FaCss3Alt className="text-7xl text-blue-600 mb-2" />
                            <span className="text-lg text-white">CSS3</span>
                        </div>
                        <div className="flex flex-col items-center w-1/4">
                            <FaJsSquare className="text-7xl text-yellow-500 mb-2" />
                            <span className="text-lg text-white">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center w-1/4">
                            <FaReact className="text-7xl text-blue-400 mb-2" />
                            <span className="text-lg text-white">React</span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex justify-between w-full max-w-xl mb-12">
                        <div className="flex flex-col items-center w-1/3">
                            <FaGithub className="text-7xl text-gray-300 mb-2" />
                            <span className="text-lg text-white">GitHub</span>
                        </div>
                        <div className="flex flex-col items-center w-1/3">
                            <FaBootstrap className="text-7xl text-purple-600 mb-2" />
                            <span className="text-lg text-white">Bootstrap</span>
                        </div>
                        <div className="flex flex-col items-center w-1/3">
                            <SiTailwindcss className="text-7xl text-teal-500 mb-2" />
                            <span className="text-lg text-white">Tailwind CSS</span>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex justify-between w-full max-w-md mb-12">
                        <div className="flex flex-col items-center w-2/3">
                            <SiMysql className="text-7xl text-orange-700 mb-2" />
                            <span className="text-lg text-white">MySQL</span>
                        </div>
                        <div className="flex flex-col items-center w-2/3">
                            <SiNetlify className="text-7xl text-blue-500 mb-2" />
                            <span className="text-lg text-white">Netlify</span>
                        </div>
                    </div>

                    {/* Python Icon Centered */}
                    <div className='flex justify-center w-full max-w-md mb-12'>
                        <div className="flex flex-col items-center">
                            <FaPython className="text-7xl text-yellow-500 mb-2" />
                            <span className="text-lg text-white">Python</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;

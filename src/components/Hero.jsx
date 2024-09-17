import React from "react";
import { HERO } from "../constants";
import EishaImg from "../assets/Eisha.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faUpwork } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';

const Hero = () => {
    return (
        <section id="home" className="flex min-h-screen flex-wrap items-center ">
            <div className="w-full md:w-1/2">
                <h2 className="my-14 p-2 text-3xl md:text-3xl lg:text-5xl relative">
                    <span className="text-white">Hi, I'm </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 font-bold">
                        Eisha Farooq
                    </span>
                    <span className="absolute top-0 left-0 mt-12 md:mt-16 ml-4 text-lg md:text-xl lg:text-2xl font-bold">
                        {/* Wrapper for gradient text */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                            <Typical
                                steps={['Web Developer', 2000, 'Software Engineer', 2000, 'UX/UI Designer', 2000]}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </span>
                    </span>
                    👋🏻
                </h2>
                <p className="mb-8 py-2 lg:py-10 px-4 text-base md:text-lg lg:text-xl">{HERO.description}</p>
                <div className="flex flex-wrap justify-start ml-5 space-x-4 mt-4">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1BofP9D6NCryI0AGDvFWGjLpoZnooeik7"
                        download
                        className="inline-block px-6 py-2 text-sm md:text-base lg:text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-800 transition duration-300"
                    >
                        Download CV
                    </a>
                    <a href="https://www.linkedin.com/in/eisha-farooq-64019a26a/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-3xl md:text-4xl mt-1 text-white hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://github.com/Eisha-Farooq" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-3xl md:text-4xl mt-1 text-white hover:text-gray-400 transition duration-300" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01613a667bac53b211" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faUpwork} className="text-3xl md:text-4xl mt-1 text-white hover:text-gray-400 transition duration-300" />
                    </a>
                </div>
            </div>
            
            <div className="w-full mt-8 md:w-1/2 lg:p-4">
                <div className="flex justify-center">
                    <img
                        src={EishaImg}
                        width={300}
                        height={300}
                        alt="Eisha"
                        className="rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

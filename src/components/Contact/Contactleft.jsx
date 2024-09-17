import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faUpwork } from '@fortawesome/free-brands-svg-icons';

const Contactleft = () => {
  return (
    <div className='w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-lg shadow-white flex flex-col gap-8 justify-center'>
    <img className='w-full h-64 object-cover rounded-lg mb-2' src="/contact-img.jpg" alt="ContactImg" />

    <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>Eisha Farooq</h3>
        <p className='text-lg font-normal text-gray-400'>
            Frontend Developer
        </p>
        <p className='text-base text-gray-400 tracking-wide'>
        As a skilled front-end developer, I specialize in creating responsive, user-friendly, and visually appealing web applications. With a strong command of HTML, CSS, JavaScript, and React, I bring designs to life while ensuring functionality across various devices and platforms.
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
            Phone: <span className='text-lightText'>0321-xxxxxxx</span>
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
            Email: {" "}
            <span className='text-lightText'>eishafarooq5@gmail.com</span>
        </p>
    </div>
    <div className='flex flex-col'>
        <h2 className='text-base uppercase font-serif mb-4'>
            Find me in
        </h2>

        <div className='flex gap-4'>
            <a href="https://www.linkedin.com/in/eisha-farooq-64019a26a/" target="_blank" rel="noopener noreferrer"> <span><FontAwesomeIcon icon={faLinkedin} className="text-4xl  text-gray-200 inline-flex items-center hover:text-gray-400 transition duration-300" /></span></a>

            <a href="https://github.com/Eisha-Farooq" target="_blank" rel="noopener noreferrer"> <span><FontAwesomeIcon icon={faGithub} className="text-4xl  text-gray-200 inline-flex items-center hover:text-gray-400 transition duration-300" /></span></a>

            <a href="https://www.upwork.com/freelancers/~01613a667bac53b211" target="_blank" rel="noopener noreferrer"> <span><FontAwesomeIcon icon={faUpwork} className="text-4xl  text-gray-200 inline-flex items-center hover:text-gray-400 transition duration-300" /></span></a>
        </div>
    </div>
</div>
  )
}

export default Contactleft
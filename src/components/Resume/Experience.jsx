import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: .5 } }}
      className='w-full flex flex-col lg:flex-row gap-10 lg:gap-20'
    >
      {/* Job Experience Section */}
      <div>
        <div className='py-6 lg:py-12 flex flex-col gap-4'>
          {/* <p className='text-sm text-red-900 tracking-[4px]'>1999-2010</p> */}
          <h2 className='text-3xl md:text-4xl font-bold'> Experience</h2>
        </div>
        <div className='mt-6 lg:mt-8 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title="Web Developer Intern"
            subTitle="July 2023 - August 2023"
            // result="3.90/4"
            des="At Pakistan Post, I worked as a web developer in a team that changed the user interface of their website. Working with a team and understanding the software development lifecycle under the capable guidance of Pakistan Post personnel was an invaluable experience."
          />
          {/* <ResumeCard
            title="BSc in computer science"
            subTitle="University of dvi (2006-2010)"
            result="3.90/4"
            des="The training provided by the university to prepare individuals to work in various sectors of the economy or culture."
          />
          <ResumeCard
            title="BSc in computer science"
            subTitle="University of dvi (2006-2010)"
            result="3.90/4"
            des="The training provided by the university to prepare individuals to work in various sectors of the economy or culture."
          /> */}
        </div>
      </div>

      {/* Trainer Experience Section */}
      <div>
        <div className='py-6 lg:py-12 flex flex-col gap-4'>
          {/* <p className='text-sm text-red-900 tracking-[4px]'>2010-2020</p> */}
          <h2 className='text-3xl md:text-4xl font-bold'> .</h2>
        </div>
        <div className='mt-6 lg:mt-8 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title="Frontend Developer"
            subTitle="May'2022 - August'2022"
            // result="3.90/4"
            des="During my internship at ByteWise Limited Private, I contributed to creating a collaborative atmosphere that boosted team efficiency while working on a range of projects focused on designing intuitive and responsive user interfaces."
          />
          {/* <ResumeCard
            title="Sr. Software Engineer"
            subTitle="GoogleOut Tech (2017-present)"
            result="3.90/4"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="GoogleOut Tech (2017-present)"
            result="3.90/4"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

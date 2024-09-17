import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievements = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { duration: 0.5 } }} 
      className='w-full flex flex-col lg:flex-row gap-10 lg:gap-20'
    >
      {/* Part 1 - Achievements Section */}
      <div>
        <div className='py-6 lg:py-12 flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl font-bold'>Achievements</h2>
        </div>
        <div className='mt-6 lg:mt-10 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title="ByteWise Limited"
            // subTitle="University of DVI (2006-2010)"
            // result="3.90/4"
            des="During my remote internship at Bytewise Limited Private, I contributed to developing user-friendly and responsive interfaces for various web applications. "
            linkedinLink="https://www.linkedin.com/posts/eisha-farooq-64019a26a_bytewise-fellowship-internship-activity-7087187508475699200-SBVm?utm_source=share&utm_medium=member_desktop"
          />
          {/* <ResumeCard
            title="Intern at Bytewise Limited Private"
            subTitle="Remote (2023)"
            des="Developed collaborative skills while working on diverse projects to create intuitive, responsive interfaces. Boosted team productivity and learned to manage remote workflows efficiently."
            linkedinLink="https://www.linkedin.com/in/your-profile/"
          /> */}
        </div>
      </div>
      
      {/* Part 2 - Other Section */}
      <div>
        <div className='py-6 lg:py-12 flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl font-bold'>.</h2>
        </div>
        <div className='mt-6 lg:mt-10 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title="Pak Post"
            // subTitle="GoogleOut Tech (2017-present)"
            // result="3.90/4"
            des="Contributed to the development of the official website of Pakistan Post as part of a collaborative team, ensuring seamless functionality and user-friendly design."
             linkedinLink="https://www.linkedin.com/in/eisha-farooq-64019a26a/"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;

import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} 
    className='w-full flex flex-col lg:flex-row gap-10 lg:gap-20'>

        {/* part 1 */}
    <div>
        <div className='py-6 lg:py-12 flex flex-col gap-4'>
            {/* <p className='text-sm text-red-900 tracking-[4px]'>1999-2010</p> */}
            <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
        </div>
        <div className='mt-6 lg:mt-10 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
                title="Intermediate(ICS)"
                subTitle="Pinjab Group of College(2018-2020)"
                // result="3.90/4"
                des="Focused on providing a strong foundation in computer science and related fields, the program equipped students with essential skills in programming, mathematics, and IT fundamentals"
            />
            {/* <ResumeCard
                title="BSc in computer science"
                subTitle="University of dvi(2006-2010)"
                // result="3.90/4"
                des="the traning provided by university in order to prepare people to work in various sectors of the economy or area of culture"
            />
            <ResumeCard
                title="BSc in computer science"
                subTitle="University of dvi(2006-2010)"
                result="3.90/4"
                des="the traning provided by university in order to prepare people to work in various sectors of the economy or area of culture"
            /> */}
        </div>
    </div>
       {/* part 2 */}
    <div>
        <div className='py-6 lg:py-12 flex flex-col gap-4'>
            {/* <p className='text-sm text-red-900 tracking-[4px]'>.</p> */}
            <h2 className='text-3xl md:text-4xl font-bold'>.</h2>
        </div>
        <div className='mt-6 lg:mt-10 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10 '>
            <ResumeCard
                title="BS Software Engineering"
                subTitle="NUML University(2021-2025)"
                // result="3.90/4"
                des="The program emphasized building a solid foundation in computer science and related disciplines, equipping students with key skills in programming, mathematics, and IT fundamentals."
            />
            {/* <ResumeCard
                title="Sr.Software Engineer"
                subTitle="googleOut tech(2017-present)"
                result="3.90/4"
                des="googles hiring process is an important part ofour culture. googlers care deeply about their teams and the people who make them up"
            />
            <ResumeCard
                title="Sr.Software Engineer"
                subTitle="googleOut tech(2017-present)"
                result="3.90/4"
                des="googles hiring process is an important part ofour culture. googlers care deeply about their teams and the people who make them up"
            /> */}
        </div>
    </div>

</motion.div>
  )
}

export default Education
import React, { useState } from 'react'
import Title from '../Title'
import Education from './Education';
import Experience from './Experience';
import Achievements from './Achievements';



const Resume = () => {
    const[educationData, setEducationData] = useState(true);
    const[experienceData, setExperienceData] = useState(false);
    const[achievementData, setAchievementData] = useState(false);

    return (
        <section id='work' className='w-full py-20 border-b-[0.5px] border-b-black '>
            <div className='flex justify-center items-center text-center '>
                <Title title="MY RESUME" des="1+ YEAR OF EXPERIENCE" />
            </div>

            <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 '>
                    <li onClick={()=>
                        setEducationData(true) &
                        setExperienceData(false) &
                        setAchievementData(false)
                    } 
                        className={`${
                            educationData ? "border-red-800 rounded-lg":"border-transparent"
                        } resumeli`} >Education</li>
                    <li onClick={()=>
                        setEducationData(false) &
                        setExperienceData(true) &
                        setAchievementData(false)
                    }   className={`${
                        experienceData ? "border-red-800 rounded-lg":"border-transparent"
                    } resumeli`}>Experience</li>
                    <li onClick={()=>
                        setEducationData(false) &
                        setExperienceData(false) &
                        setAchievementData(true)
                    }  className={`${
                        achievementData ? "border-red-800 rounded-lg":"border-transparent"
                    } resumeli`}>Achievements</li>
                </ul>
            </div>
            { educationData && <Education /> }
            { experienceData && <Experience />}
            { achievementData && <Achievements />}

          
          {/* <Education/> */}
          {/* < Experience/> */}
          {/* <Achievements/> */}
        </section>
    )
}

export default Resume
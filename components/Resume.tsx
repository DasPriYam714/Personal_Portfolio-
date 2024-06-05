'use client';

import { useState } from 'react';
import MySkills from './ui/MySkills';
import EducationResults from './ui/educationResult';
import { Anime } from './ui/Anime';

const Resume = () => {
  const [educationData, setEducationData] = useState<boolean>(true);
  const [skillData, setSkillData] = useState<boolean>(false);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <Anime>
      <h1 className='heading mb-7'>A short collection of my 
        <span className='text-purple'> Education, Skills & Experiences</span>
      </h1>
        
        <div className="flex justify-center items-center text-center">
          <ul className="w-full justify-center flex flex-row-1 md:flex-cols-2 ">
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
              }}
              className={`${
                skillData ? 'border-[#080356] rounded-lg' : 'border-transparent'
              } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
              }}
              className={`${
                educationData ? 'border-[#080356] rounded-lg' : 'border-transparent'
              } resumeLi`}
            >
              Education & Experience
            </li>
          </ul>
        </div>
        {skillData && <MySkills />}
        {educationData && <EducationResults />}
      </Anime>
    </section>
  );
};

export default Resume;

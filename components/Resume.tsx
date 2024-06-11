'use client';

import { useState } from 'react';
import MySkills from './ui/MySkills';
import EducationResults from './ui/educationResult';
import { Anime } from './ui/Anime';
import { FlipWords } from './ui/flip-words';

const Resume = () => {
  const [educationData, setEducationData] = useState<boolean>(false);
  const [skillData, setSkillData] = useState<boolean>(true);
  const part =['Education', 'Skills', 'Experience']

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <Anime>
      <h1 className='heading mb-10'>A short collection of my 
        <span className='text-[#d293e9]'><FlipWords wrd={part} className='text-[#d293e9]'></FlipWords></span>
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

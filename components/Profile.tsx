'use client'
import React from 'react';

import Link from 'next/link';
import { profileItems } from '@/data';
import { BentoGridItem } from './ui/bento-grid';
import { BackgroundGradient } from './ui/background-gradient';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiFigma, SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { ImGithub } from "react-icons/im";
import { LuLinkedin } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SiDotnet } from "react-icons/si";
interface Items{
    id: number;
  img:string;
  imgClassName: string;
  titleClassName: string;
  spareImg:string;
    
}

const Profile = () => {
    
    return (
        <div >
       <BackgroundGradient className="rounded-[22px] max-w-200px p-2 sm:p-20 bg-white dark:bg-zinc-900 justify-center">
       <div className='lg:flex flex-between justify-between '>
       
       <div className='text-center text-[40px] md:text-4xl lg:text-5xl w-[60vh]'>
        <h1>Hi! I'm <span className='text-blue-500 dark:text-blue-500'>Priyam</span></h1>
       <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Lets Meet Together.
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        As a driven computer science graduate proficient in JavaScript, React, Next.js, and Nest.js, I bring
 expertise in manual software testing, including writing test cases and effectively identifying bugs. My
 collaborative approach with developers ensures high-quality software releases. A quick learner with a
 keen eye for detail, I excel in solving complex problems. Seeking a position where I can apply my strong
 knowledge and skills to contribute effectively.
        </p>
       </div>
       <div className='justify-center lg:w-[50vh] sm:mt-20px '>
       <img
          src='priyam.png'
          alt="Priyam"
          height="500"
          width="500"
          className="rounded-[20px] flex flex-center justify-center "
        />
       </div>
       </div>
       <div className="flex flex-col gap-10 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 text-2xl">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiDotnet />
            </span>

          </div>
        </div>
        </div>

        <div className='mt-10px'>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-5">
            Find me in
          </h2>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/DasPriYam714" target="_blank">
              <span className="bannerIcon">
                <ImGithub></ImGithub>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/priyam-das-3454b31ab/"
              target="_blank"
            >
              <span className="bannerIcon">
                <LuLinkedin></LuLinkedin>
              </span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005431756450" target="_blank">
              <span className="bannerIcon">
                <RiFacebookCircleLine></RiFacebookCircleLine>
              </span>
            </a>
          </div>
        </div>
        
       
      </BackgroundGradient>
       

    </div>
);
};

 export default Profile;
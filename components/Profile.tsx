"use client"
import React from "react";

import Link from "next/link";
import { profileItems } from "@/data";
import { BentoGridItem } from "./ui/bento-grid";
import { BackgroundGradient } from "./ui/background-gradient";
import { FaNodeJs,FaPhp, FaReact } from "react-icons/fa";
import {  SiNextdotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { LuLinkedin } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDotnet, SiNestjs } from "react-icons/si";
interface Items{
    id: number;
  img:string;
  imgClassName: string;
  titleClassName: string;
  spareImg:string;
    
}

const Profile = () => {
    
    return (
        <div id="profile" >
       <BackgroundGradient className="rounded-[22px] max-w-150px p-2 sm:p-10 bg-white dark:bg-zinc-900 justify-center  ">
       <div className="flex flex-col mb-4 md:flex-row flex-between justify-items-center justify-center md:justify-between  ">
       
       <div className="flex flex-col mx-auto text-justify justify-center items-center w-auto text-[40px] mb-5 sm:text-4xl md:text-5xl  md:w-[70vh]">
       <div className="text-center justify-center">
       <h1>Hi! I am <span className="text-blue-500 dark:text-blue-500">Priyam</span></h1>
       <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Lets Meet Together.
        </p>
       </div>
 
        <p className="text-sm mx-auto text-neutral-600 dark:text-neutral-400 justify-center sm:text-wrap sm:mb-4 sm:ml-5 md:mr-5">
        I am a frontend-focused full-stack junior developer with expertise in JavaScript, React, Next.js, and Nest.js. Passionate about crafting dynamic web applications, I thrive on challenges, bringing innovative solutions through problem-solving skills. Proficient in manual software testing, I ensure high-quality releases and collaborate effectively with developers. As a driven computer science graduate, I am committed to continuous learning and staying updated with industry trends. With a strong foundation in the MERN stack, I am eager to make an impact in the IT industry, combining my development and testing skills to deliver robust solutions. My collaborative approach, problem-solving abilities, and attention to detail equip me to excel in any project. I value effective communication and teamwork and am excited to contribute my skills and creativity to drive technological innovation forward.
        </p>
       </div>
       <div className="justify-center lg:w-[55vh] sm:mt-5 md:justify-center item-center ">
       <img
          src="priyam.png"
          alt="Priyam"
          height="600"
          width="600"
          className="rounded-[20px] flex flex-center justify-center mt-4 mb-3  sm:mt-20 "
        />
       </div>
       </div>
       <div className="flex flex-col gap-10 justify-between w-[20vh] md:w-[80vh] text-wrap">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ">
          EXPERTISE IN
          </h2>
          <div className="flex w-auto break-after-auto gap-2 text-2xl md:gap-4 md:text-3xl">
          <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <FaPhp />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNestjs />
            </span>
            <span className="bannerIcon">
              <TbBrandNextjs />
            </span>
            <span className="bannerIcon">
              <SiDotnet />
            </span>
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
           

          </div>
        </div>
        </div>

        <div className="mt-10px">
          <h2 className="text-base uppercase font-titleFont mb-4 mt-5">
            Find me in
          </h2>
          <div className="flex gap-2 text-2xl md:gap-4 md:text-3xl">
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
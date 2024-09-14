'use client';
import { motion } from 'framer-motion';

import AcademicResults from './academicResults.tsx';

// Define the type for the props that the AcademicResults component will receive
interface AcademicResultsProps {
  title: string;
  subTitle: string;
  year: string;
  result: string;
}

const EducationResults = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* part one */}
      <div className="w-full md:w-1/2">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AcademicResults
            title="BSc in Computer Science"
            subTitle="American International University- Bangladesh"
            year="2019 - 2024"
            result="3.51/4"
          />
          <AcademicResults
            title="Higher Secondary School Certificate"
            subTitle="Hazera-Taju Degree College"
            year="2017 - 2019"
            result="4.10/5"
          />
          <AcademicResults
            title="Secondary School Certificate"
            subTitle="Chittagong Government High School Chittagong"
            year="2017"
            result="5.00/5"
          />
        </div>
      </div>
      {/* part two */}
      <div className="w-full md:w-1/2">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">June 2023 - Feb 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <AcademicResults
          className='shadow-lg shadow-gray-400'
            title="WordPress Developer"
            subTitle="Tech Manager at GAOTek"
            year="Here I worked as an wordpress developer trainee. I worked with the Development team to build their website using wordpress.
            I successfully developed an advanced e-commerce website, and handled UI/UX design."
            result="Bangladesh"
          >
            
          </AcademicResults>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationResults;

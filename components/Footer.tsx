import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='py-5 border-t-[1px] border-b-gray-700'>
                <div className='flex mt-16 md-flex-row flex-col justify-between items-center'>
                    <p className='md:text-xl text-lg md:font-normal font-light'>©Copyright 2024 Priyam</p>
                    <div className='flex items-center md:gap-3 gap-6 md:text-2xl text-xl mb-10 mt-3 '>
                    <a href="https://github.com/DasPriYam714" target="_blank" className='p-2 border-2px border-rounded'>
              <span className="bannerIcon ">
                <FaGithub  />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/priyam-das-3454b31ab"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005431756450" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
                    
                </div>

                </div>
                
            </div>
            
        </div>
    );
};

export default Footer;
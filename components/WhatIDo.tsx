
import { whatIDo } from '@/data';
import React from 'react';
import { Button } from './ui/moving-border';

const WhatIDo = () => {
    return (
        <div>
            <div className='mt-10 mb-8'>
            <h1 className='heading mb-10'>A short collection of 
        <span className='text-[#d293e9]'> What I Do</span>
      </h1>
            </div>
            <div className='w-full mt-12 mb-10 grid md:grid-cols-2 grid-cols-1 gap-10'>
                {whatIDo.map((card) => (
                    <Button key={card.id}
                    duration={Math.floor(Math.random()*10000)+10000}
                    borderRadius='1.80rem'
                    className='flex-1 text-white-200 border-neutral-200 dark:border-slate-800'>
                        <div className='flex md:flex-row flex-col md:items-center p-3 py-6 md:p-5 gap-2'>
                            <img src={card.thumbnail} alt={card.thumbnail}
                            className='lg:w-32 md:w-20 w-16' />
                            
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl text-white-200 md:text-2xl'>{card.title}</h1>
                                <p className='text-start text-white-200 mt-3 font-semibold'> {card.desc}</p>
                            </div>
                        </div>
                    </Button>
                ))}

            </div>
        </div>
    );
};

export default WhatIDo;
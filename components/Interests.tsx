import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { interests } from '@/data';

const Interests = () => {
    return (
        <div>
            <div>
            <h1 className='heading mb-10'>A small selection of my 
        <span className='text-[#d293e9]'> Personal Interests</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <div >
        <InfiniteMovingCards
        items={interests}
        direction='right'
        speed='slow'></InfiniteMovingCards>
        </div>
      </div>

            </div>
        </div>
    );
};

export default Interests;
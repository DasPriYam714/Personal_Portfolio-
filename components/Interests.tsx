import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { testimonials } from '@/data';

const Interests = () => {
    return (
        <div>
            <div>
            <h1 className='heading'>A small selection of my 
        <span className='text-purple'> Personal Interests</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <div >
        <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'></InfiniteMovingCards>
        </div>
      </div>

            </div>
        </div>
    );
};

export default Interests;
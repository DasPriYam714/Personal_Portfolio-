import React from 'react';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './ui/glowing-stars';

const Achievement = () => {
    return (
        <div>
             <div className="flex justify-center items-center text-center mb-8">
        <h1 className='heading'>A small collection of my
        <span className='text-purple'> Achievement</span>
      </h1>
        </div>
        <div>
        <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            The power of full-stack to the frontend. Read the release notes.
          </GlowingStarsDescription>
          
        </div>
      </GlowingStarsBackgroundCard>
        </div>
        </div>
    );
};

export default Achievement;
import React from 'react';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from './ui/glowing-stars';

const Achievement = () => {
    return (
        <div>
             <div className="flex justify-center items-center text-center mb-8">
        <h1 className='heading'>A small collection of my
        <span className='text-[#d293e9]'> Achievement</span>
      </h1>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center p-2 gap-x-24 gap-y-8 mt-10 w-auto'>
        <GlowingStarsBackgroundCard>
        <GlowingStarsTitle className='text-blue-500'>THE CHATGAIYA VIEW</GlowingStarsTitle>
        <div className="flex  items-end">
          <GlowingStarsDescription>
            Finalist of “THE CHATGAIYA VIEW” National Photography Exhibition by AUWPC.
          </GlowingStarsDescription>
          
        </div>
      </GlowingStarsBackgroundCard>

      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle className='text-blue-500'>KOLPONA</GlowingStarsTitle>
        <div className="flex  items-end">
          <GlowingStarsDescription>
          Finalist of “KOLPONA” 11th International Photography Exhibition by AUWPC.
          </GlowingStarsDescription>
          
        </div>
      </GlowingStarsBackgroundCard>
        </div>
        </div>
    );
};

export default Achievement;
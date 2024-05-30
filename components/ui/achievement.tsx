import React from 'react';
import { HoverEffect } from './card-hover-effect';
import { achievement } from '@/data';

const Achievement = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={achievement} />
    </div>
        </div>
    );
};

export default Achievement;
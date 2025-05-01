import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center gap-4 bg-base-300 p-3'>
            <p className='bg-[#D72050] text-white p-3'>Latest</p>
            <Marquee className='gap-5' pauseOnHover={true} speed={60}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reprehenderit sint corrupti praesentium unde aliquid? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reprehenderit sint corrupti praesentium unde aliquid? </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, reprehenderit sint corrupti praesentium unde aliquid? </p>
            </Marquee>
        </div>
    );
};

export default Latest;
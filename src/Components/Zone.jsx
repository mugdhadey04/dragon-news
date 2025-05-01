import React from 'react';
import swimming from '../assets/swimming.png';
import classRoom from '../assets/class.png';
import playGround from '../assets/playground.png'
import Advertisement from '../assets/bg.png'

const Zone = () => {
    return (
        <div>


            <div className='bg-base-300 p-5 rounded-lg'>
                <h2 className='font-bold mb-3 justify-start'>QZone</h2>
                <div className="justify-items-center">
                    <img src={swimming} alt="" />
                    <img src={classRoom} alt="" />
                    <img src={playGround} alt="" />
                </div>
            </div>
            <div className='justify-items-center mt-7'>
                <img className='w-full' src={Advertisement} alt="" />
            </div>
        </div>
    );
};

export default Zone;
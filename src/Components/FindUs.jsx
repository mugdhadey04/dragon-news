import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold'>Find us on</h2>
            <div className='justify-items-center'>
                <div className="join join-vertical w-full mt-2">
                    <button className="btn bg-white justify-start gap-3 items-center text-[16px] join-item"><FaFacebook size={20}/> Facebook</button>
                    <button className="btn bg-white justify-start gap-3 items-center text-[16px] join-item"><FaTwitter  size={20}/> Twitter</button>
                    <button className="btn bg-white justify-start gap-3 items-center text-[16px] join-item"><FaInstagram size={20}/> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;
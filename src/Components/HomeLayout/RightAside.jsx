import React from 'react';
import SocialLogin from '../socialLogin';
import FindUs from '../FIndUs';
import Zone from '../Zone';

const RightAside = () => {
    return (
        <div className='space-y-3'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Zone></Zone>
        </div>
    );
};

export default RightAside;
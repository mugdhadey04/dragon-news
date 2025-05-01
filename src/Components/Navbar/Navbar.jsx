import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='nav flex gap-3 text-neutral-500'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">career</NavLink>
            </div>
            <div className='login-btn flex gap-3'>
                <img src={user} alt="" />
                <button className='btn bg-[#403F3F] px-7 text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;
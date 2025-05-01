import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Latest from '../Components/LatestNews/Latest';
import Navbar from '../Components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className='w-11/12 mx-auto my-3.5'><Latest></Latest></section>
            <nav className='w-11/12 mx-auto my-3.5'>
            <Navbar></Navbar>
            </nav>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;
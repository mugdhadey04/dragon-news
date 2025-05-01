import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Latest from '../Components/LatestNews/Latest';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className='w-11/12 mx-auto my-3.5'><Latest></Latest></section>
            <nav className='w-11/12 mx-auto my-3.5'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-3.5 lg:grid lg:grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;
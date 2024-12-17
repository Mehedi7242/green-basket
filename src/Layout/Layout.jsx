import React from 'react';
import { Outlet, Route, Routes } from 'react-router';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <>
            <nav className=' sticky top-0 z-50'>
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </>

    );
};

export default Layout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const Layout = () => {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;

import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const Layout = () => {
    return (
    <>
        <Header />
        <Home />
        <Footer />
    </>
    );
};


export default Layout;
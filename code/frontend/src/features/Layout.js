import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/navbar.component";
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
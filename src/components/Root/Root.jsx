import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
        <div className="min-h-screen flex flex-col justify-between">
            <div className=''>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <ToastContainer position="top-center" />
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Root;
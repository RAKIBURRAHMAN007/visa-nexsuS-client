import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <div className='mb-64'>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <ToastContainer position="top-center" />

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;
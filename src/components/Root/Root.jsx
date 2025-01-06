import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../provider/ThemeProvider';

const Root = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
        <div className={`min-h-screen flex flex-col justify-between ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div >
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
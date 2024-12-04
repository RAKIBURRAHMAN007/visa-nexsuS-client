import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);
    const links = <>
  
        <li><NavLink  to='/'>Home</NavLink></li>
        <li><NavLink to='/allVisa'>All Visas</NavLink></li>
        <li><NavLink to='/addVisa'>Add Visa</NavLink></li>
        <li><NavLink to='/myAddedVisa'>My Added Visas</NavLink></li>
        <li><NavLink to='/myVisaApplications'>My Visa Applications</NavLink></li>


    </>
    return (

        <div className="navbar bg-[#162e40] sticky backdrop-blur-md  top-0 z-10 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#9660ea] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-sm md:text-2xl  text-white "><span className='bg-black text-white p-2'>VISA</span> NAVIGATOR</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base  text-white ">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ? <div className=' flex  gap-1  items-center'>
                        <div className='w-10 rounded-full border  text-white  '>
                            <img className='rounded-full p-1' src={user.photoURL} alt="" />

                        </div>

                        <Link onClick={logOut} className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>

                            <span className="relative text-white">Logout</span>
                        </Link>



                    </div>


                        :

                        <div className='flex gap-2'>
                        <Link to='/login'>
                            <button className='rounded-lg py-2 md:px-4 w-14 md:w-28 text-xs md:text-sm font-semibold bg-black text-white border-2 border-gray-400 focus:ring-4 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 ease-in-out shadow-lg'>
                                Login
                            </button>
                        </Link>
                        <Link to='/register'>
                            <button className='rounded-lg py-2 md:px-4 w-16 md:w-32 text-xs md:text-sm font-semibold bg-black text-white border-2 border-gray-400 focus:ring-4 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 ease-in-out shadow-lg'>
                                Register
                            </button>
                        </Link>
                    </div>
                    




                }



            </div>



        </div>

    );
};

export default NavBar;
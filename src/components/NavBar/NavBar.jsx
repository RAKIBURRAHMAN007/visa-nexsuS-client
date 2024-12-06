import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);
    const [active, setActive] = useState('home'); 

    const handleActive = (link) => {
      setActive(link); 
    };
  
    const links = (
      <>
        
          <button
            onClick={() => handleActive('home')}
            className={active === 'home' ? 'bg-black text-white p-2' : ''}
          >
            <Link to="/">Home</Link>
          </button>
        
        
          <button
            onClick={() => handleActive('allVisa')}
            className={active === 'allVisa' ? 'bg-black text-white p-2' : ''}
          >
            <Link to="/allVisa">All Visas</Link>
          </button>
        
        
          <button
            onClick={() => handleActive('addVisa')}
            className={active === 'addVisa' ? 'bg-black text-white p-2' : ''}
          >
            <Link to="/addVisa">Add Visa</Link>
          </button>
        
        
          <button
            onClick={() => handleActive('myAddedVisa')}
            className={active === 'myAddedVisa' ? 'bg-black text-white p-2' : ''}
          >
            <Link to="/myAddedVisa">My Added Visas</Link>
          </button>
        
        
          <button
            onClick={() => handleActive('myVisaApplications')}
            className={active === 'myVisaApplications' ? 'bg-black text-white p-2' : ''}
          >
            <Link to="/myVisaApplications">My Visa Applications</Link>
          </button>
        
      </>
    );

    return (
        <div className="navbar bg-[#162e40] sticky backdrop-blur-md top-0 z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#162e40] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1"
                    >
                        {links}
                    </ul>
                </div>
                <a className=" btn-ghost text-sm md:text-2xl text-white border border-white pr-1">
                    <span className="bg-black btn rounded-none text-white p-2">VISA</span>  NEXUS
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 text-sm text-white">
                    {links}
                </ul>
            </div>

            <div className="ml-2 navbar-end">
                {user ? (
                   
                    <div className="dropdown dropdown-end dropdown-hover mr-4">
                        <div tabIndex={0} role="button" className="border  w-10 rounded-full">  <img
                            className=" w-full rounded-full px-1 py-1"
                            src={user.photoURL}
                            alt="user"
                        /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>User Name </a></li>
                            <li><a> <span className="block font-bold text-sm">{user.displayName}</span></a></li>
                            <li onClick={logOut} className='bg-black text-white hover:bg-blue-400'> <Link
                                
                                className="block text-sm  px-2 py-1 rounded-lg"
                            >
                                Logout
                            </Link></li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link to="/login">
                            <button className="rounded-lg py-2 md:px-4 w-14 md:w-28 text-xs md:text-sm font-semibold bg-black text-white border-2 border-gray-400 focus:ring-4 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 ease-in-out shadow-lg">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="rounded-lg py-2 md:px-4 w-16 md:w-32 text-xs md:text-sm font-semibold bg-black text-white border-2 border-gray-400 focus:ring-4 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 ease-in-out shadow-lg">
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div >
    );
};

export default NavBar;
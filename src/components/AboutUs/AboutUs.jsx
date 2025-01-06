import React from 'react';
import about from '../../assets/about.jpg'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div  className='mt-20 w-11/12 mx-auto clear-start md:flex gap-6'>
            <div className='md:w-1/2'>
                <img src={about} alt="" />

                <Link to='/aboutUs'>  <button className='btn bg-black mt-10 w-1/2 text-white p-2 rounded-xl'>Learn More</button></Link>

            </div>
            <div className='md:w-1/2'>
                <h1 className='text-red-500 font-bold'>About Us</h1>
                <h1 className='font-bold text-xl md:text-2xl mt-2'>Welcome to Visa Navigator – Your Trusted Visa Companion</h1>
                <p className='mt-5'>Visa Nexus simplifies your visa journey with expert advice and seamless processes. Whether you're traveling for business, study, or leisure, we provide the support you need to make your visa application smooth and successful.</p>

                <div className='flex justify-between items-center gap-3 md:gap-7'>
                    <div className='bg-red-500 text-white w-44 h-44 p-9  mt-2'>
                        <h1>8k+</h1>
                        <p>People Say About Us</p>
                    </div>

                    <div>
                        <div className='bg-red-500 text-white p-2  md:p-9 h-40 md:h-48 lg:h-32 mt-9'>
                            <p>we have 5+ Years of experience in visa and immigrations services.</p>


                        </div>
                        <div className='bg-black text-white p-1 lg:p-4 h-14'>
                            <p>Apply online for new visa</p>


                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;
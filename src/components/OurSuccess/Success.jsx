import React from 'react';
import CountUp from 'react-countup';
import { useTypewriter } from 'react-simple-typewriter'
const Success = () => {
    const [text] = useTypewriter({
        words: ['35+ Country represented ', '1000+ Completed Visa', '55M+ Revenue', '1500+ User'],
        loop: 0
    })
    return (
        <div className='mt-32'>

            <div className='App flex justify-center mb-36'>
               <button className='font-bold md:text-2xl'>Our Success  <span className='text-red-500'>{text}</span> </button>
            </div>

            <div className="lg:flex space-y-24  lg:space-y-0 justify-center w-11/12 mx-auto gap-8 mt-12">
                <div className="card w-full lg:w-80 hover:bg-[#162e40]  hover:text-white  bg-white shadow-xl border border-gray-200 rounded-lg">

                    <div className="card-body  text-center flex justify-center items-center mt-1">
                        <div className='absolute   mb-48  lg:mb-56 border rounded-full p-4 bg-white'>
                            <img className='w-20' src="https://img.icons8.com/?size=100&id=Myci_fIdr5CB&format=png&color=000000" alt="" />
                        </div>

                        <div className="text-4xl font-bold  mt-6">
                            <CountUp start={0} end={35} duration={7} /><span>+</span>
                        </div>
                        <p className=" mt-4 ">Countries
                            Represented</p>
                    </div>
                </div>

                <div className="card w-full lg:w-80 hover:bg-[#162e40]  hover:text-white  bg-white shadow-xl border border-gray-200 rounded-lg">

                    <div className="card-body text-center flex justify-center items-center mt-1">
                        <div className='absolute   mb-48  lg:mb-56 border rounded-full p-4 bg-white'>
                            <img className='w-20' src="https://img.icons8.com/?size=100&id=9867&format=png&color=000000" alt="" />
                        </div>

                        <div className="text-4xl font-bold  mt-6">
                            <CountUp start={0} end={1000} duration={7} /><span>+</span>
                        </div>
                        <p className=" mt-4">Completed
                            Visa Passport</p>
                    </div>
                </div>


                <div className="card w-full lg:w-80 hover:bg-[#162e40]  hover:text-white  bg-white shadow-xl border border-gray-200 rounded-lg">

                    <div className="card-body text-center flex justify-center items-center mt-1">
                        <div className='absolute   mb-48  lg:mb-56 border rounded-full p-4 bg-white'>
                            <img className='w-20' src="https://img.icons8.com/?size=100&id=LlQ2St1M9RK8&format=png&color=000000" alt="" />
                        </div>

                        <div className="text-4xl font-bold mt-6">
                            <CountUp start={0} end={55} duration={7} /><span>M+</span>
                        </div>
                        <p className=" mt-4">Revenue
                            In per year</p>
                    </div>
                </div>


                <div className="card w-full lg:w-80 hover:bg-[#162e40]  hover:text-white  bg-white shadow-xl border border-gray-200 rounded-lg">

                    <div className="card-body text-center flex justify-center items-center mt-1">
                        <div className='absolute mb-48  lg:mb-56 border rounded-full p-4 bg-white'>
                            <img className='w-20' src="https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=000000" alt="" />
                        </div>

                        <div className="text-4xl font-bold  mt-6">
                            <CountUp start={0} end={1500} duration={7} /><span>+</span>
                        </div>
                        <p className=" mt-4">Total Users Registered</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;

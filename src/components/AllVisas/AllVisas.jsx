import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './visaCard/VisaCard';

const AllVisas = () => {
    const visas = useLoaderData();
    console.log(visas)
    return (
        <div className='mt-16 w-11/12 mx-auto'>
            <div >
                <h1 className='text-xl font-bold text-center md:text-4xl'>Discover Visas Around <br /> the World</h1>
                <p className='mt-5 text-center text-sm'>Explore visa options from every corner of the globe. Whether you’re traveling for leisure,<br /> pursuing education, or seizing work opportunities,<br /> we’ve got the right information for you.</p>
            </div>
            <div className='md:flex justify-center '>
                <div className='md:grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16  '>
                    {visas.map(visa => <VisaCard visa={visa}></VisaCard>)}
                </div>
            </div>
        </div>
    );
};

export default AllVisas;
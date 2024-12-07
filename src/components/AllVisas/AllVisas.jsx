import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './visaCard/VisaCard';

const AllVisas = () => {
    const visas = useLoaderData();

  
    const [selectedVisaType, setSelectedVisaType] = useState('All');

 
    const filteredVisas = selectedVisaType === 'All' 
        ? visas 
        : visas.filter(visa => visa.visaType === selectedVisaType);

    const handleFilterChange = (e) => {
        setSelectedVisaType(e.target.value);
    };

    return (
        <div className='mt-16 mb-16 w-11/12 mx-auto'>
            
            <div>
                <h1 className='text-xl font-bold text-center md:text-4xl'>
                    Discover Visas Around <br /> the World
                </h1>
                <p className='mt-5 text-center text-sm'>
                    Explore visa options from every corner of the globe. Whether you’re traveling for leisure,
                    <br /> pursuing education, or seizing work opportunities,
                    <br /> we’ve got the right information for you.
                </p>
            </div>

          
            <div className="flex justify-center  mt-8">
                <select
                    className="border-2 font-bold rounded-md px-4 py-2 text-sm"
                    value={selectedVisaType}
                    onChange={handleFilterChange}
                >
                    <option value="All">All Visa Types</option>
                    <option value="Tourist visa">Tourist Visa</option>
                    <option value="Student visa">Student Visa</option>
                    <option value="Work visa">Work Visa</option>
                </select>
            </div>

           
            <div className='md:flex justify-center'>
                <div className='md:grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16'>
                    {filteredVisas.map(visa => (
                        <VisaCard key={visa._id} visa={visa} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllVisas;

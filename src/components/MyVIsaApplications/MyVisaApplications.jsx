import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import MyApplicationCard from './MyApplicationCard';
import Swal from 'sweetalert2';

const MyVisaApplications = () => {
    const { user } = useContext(AuthContext);
    const visaData = useLoaderData();

 
    const [originalData] = useState(visaData.filter(singleVisaData => singleVisaData.email === user.email));
    const [loggedUserData, setLoggedUserData] = useState(originalData);

   
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-server-pi.vercel.app/appliedVisa/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setLoggedUserData(loggedUserData.filter(visa => visa._id !== id));

                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Visa application has been cancelled.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    
    const handleSearch = (e) => {
        e.preventDefault();
        const countryName = e.target.country.value.trim();

        if (!countryName) {
           
            setLoggedUserData(originalData);
            return;
        }

        const searchData = originalData.filter(singleLoggedUserData => 
            singleLoggedUserData.countryName.toLowerCase() === countryName.toLowerCase()
        );

        setLoggedUserData(searchData);
    };

    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h1 className='text-center text-xl font-bold md:text-3xl lg:text-5xl'>Manage Your Visa <br />Applications</h1>
            <div className='flex justify-end md:w-11/12 mt-10'>
                <form onSubmit={handleSearch} className='border-2 rounded-xl'>
                    <input className='pl-4' placeholder='Country Name' required type="text" name="country" />
                    <input className='bg-[#162e40] text-white rounded-xl rounded-l-none p-1' type="submit" value="Search" />
                </form>
            </div>
            <div className='md:flex justify-center'>
                <div className='pb-20 pt-7 md:grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {loggedUserData.length > 0 ? (
                        loggedUserData.map(singleLoggedVisaData => (
                            <MyApplicationCard
                                key={singleLoggedVisaData._id}
                                singleLoggedVisaData={singleLoggedVisaData}
                                handleDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <div className="text-center text-gray-500 mt-10">
                            No data found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplications;

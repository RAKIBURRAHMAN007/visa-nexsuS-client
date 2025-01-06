import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
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
        <div className='w-11/12 mx-auto mb-10 mt-10'>
            <h1 className='text-center text-xl font-bold md:text-3xl lg:text-5xl'>
                Manage Your Visa <br />Applications
            </h1>
            <div className='flex justify-end md:w-11/12 mt-10'>
                <form onSubmit={handleSearch} className='border-2 rounded-xl'>
                    <input className='pl-4' placeholder='Country Name' required type="text" name="country" />
                    <input className='bg-[#162e40] text-white rounded-xl rounded-l-none p-1' type="submit" value="Search" />
                </form>
            </div>
            <div className='overflow-x-auto py-8'>
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">Country</th>
                            <th className="px-4 py-2 text-left">Visa Type</th>
                            <th className="px-4 py-2 text-left">Cost</th>
                            <th className="px-4 py-2 text-left">Processing Time</th>
                            <th className="px-4 py-2 text-left">Validity</th>
                            <th className="px-4 py-2 text-left">Application Method</th>
                            <th className="px-4 py-2 text-left">Applied Date</th>
                            <th className="px-4 py-2 text-left">Applicant</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loggedUserData.length > 0 ? (
                            loggedUserData.map(singleLoggedVisaData => (
                                <tr key={singleLoggedVisaData._id} className="border-b">
                                    <td className="px-4 py-2">
                                        <img src={singleLoggedVisaData.countryImage} alt="Country" className="w-20 h-12 object-cover" />
                                        <div>{singleLoggedVisaData.countryName}</div>
                                    </td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.visaType}</td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.fee}$</td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.processingTime} days</td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.validity} days</td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.applicationMethod}</td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.appliedDate}</td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.firstName} {singleLoggedVisaData.lastName}</td>
                                    <td className="px-4 py-2">{singleLoggedVisaData.email}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(singleLoggedVisaData._id)}
                                            className="text-red-500 hover:text-red-700 border border-red-500 px-4 py-2 rounded-md"
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10" className="text-center text-gray-500 py-4">
                                    No data found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyVisaApplications;

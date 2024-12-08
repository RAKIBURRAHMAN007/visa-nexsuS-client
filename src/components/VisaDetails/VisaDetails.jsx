import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';

const VisaDetails = () => {
    const visaData = useLoaderData();
    const {user} = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        countryImage,
        countryName,
        visaType,
        processingTime,
        requiredDocuments,
        description,
        ageRestriction,
        fee,
        validity,
        applicationMethod,
    } = visaData;

  
    

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const applicationData = {
            email: user.email,
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            appliedDate: new Date().toISOString().split('T')[0], 
            fee: fee,
            countryImage,
            countryName,
            visaType,
            processingTime,
            requiredDocuments,
            description,
            ageRestriction,
            validity,
            applicationMethod,

        };
        console.log("Application Submitted:", applicationData);

        fetch('https://visa-navigator-server-pi.vercel.app/appliedVisa',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(applicationData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast.success("Application submitted successfully!");
            }
        })

    

        handleCloseModal();
    };

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg mb-10 mt-10">

            <div className="flex justify-center mb-6">
                <img
                    src={countryImage}
                    alt={countryName}
                    className="w-56 h-32 object-cover  shadow-lg"
                />
            </div>

            <h1 className="text-3xl font-bold text-center mb-4">{countryName}</h1>
            <p className="text-lg mb-4">
                <strong>Visa Type:</strong> {visaType}
            </p>
            <p className="text-lg mb-4">
                <strong>Processing Time:</strong> {processingTime} days
            </p>
            <p className="text-lg mb-4">
                <strong>Validity:</strong> {validity} days
            </p>
            <p className="text-lg mb-4">
                <strong>Fee:</strong> ${fee}
            </p>
            <p className="text-lg mb-4">
                <strong>Age Restriction:</strong> {ageRestriction}+
            </p>
            <p className="text-lg mb-4">
                <strong>Application Method:</strong> {applicationMethod}
            </p>
            <p className="text-lg mb-4">
                <strong>Description:</strong> {description}
            </p>

            <div className="text-lg mb-4">
                <strong>Required Documents:</strong>
                <ul className="list-disc ml-6 mt-2">
                    {requiredDocuments.map((doc, index) => (
                        <li key={index}>{doc}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleOpenModal}
                    className="btn bg-black mt-10 w-1/2 text-white p-2 rounded-xl"
                >
                    Apply
                </button>
            </div>

           
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md w-96 max-w-full">
                        <h2 className="text-xl font-bold mb-4">Apply for Visa</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="border rounded-md w-full p-2"
                                    defaultValue={user.email}
                                    
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="border rounded-md w-full p-2"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="border rounded-md w-full p-2"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Applied Date</label>
                                <input
                                    type="text"
                                    className="border rounded-md w-full p-2"
                                    defaultValue={new Date().toISOString().split('T')[0]} 
                                   
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Fee</label>
                                <input
                                    type="number"
                                    className="border rounded-md w-full p-2"
                                    defaultValue={fee}
                                    
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white w-full py-2 rounded-md hover:bg-gray-700"
                            >
                                Apply
                            </button>
                        </form>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 bg-gray-500 text-white w-full py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisaDetails;

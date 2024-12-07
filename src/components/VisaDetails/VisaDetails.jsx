import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VisaDetails = () => {
    const visaData = useLoaderData();


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
            <div className='flex justify-center'>
                <button className='btn bg-black mt-10 w-1/2 text-white p-2 rounded-xl'>Apply</button>

            </div>
        </div>
    );
};

export default VisaDetails;

import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const MyAddedVisas = () => {
    const { user } = useContext(AuthContext);
    const visaData = useLoaderData();

   
    const dataByLoggedUser = visaData.filter(singleVisaData => singleVisaData.email === user.email);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {dataByLoggedUser.length !== 0 ? (
                dataByLoggedUser.map((visa, index) => (
                    <div key={index} className="border rounded-lg shadow-md p-4">
                        <img 
                            src={visa.countryImage} 
                            alt={`Flag of ${visa.countryName}`} 
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-semibold mt-2">{visa.countryName}</h2>
                        <p><strong>Visa Type:</strong> {visa.visaType}</p>
                        <p><strong>Processing Time:</strong> {visa.processingTime} days</p>
                        <p><strong>Fee:</strong> ${visa.fee}</p>
                        <p><strong>Validity:</strong> {visa.validity} days</p>
                        <p><strong>Application Method:</strong> {visa.applicationMethod}</p>

                        <div className="flex justify-between mt-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                                Update
                            </button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default MyAddedVisas;

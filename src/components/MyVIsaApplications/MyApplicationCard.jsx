import React from 'react';
import Swal from 'sweetalert2';

const MyApplicationCard = ({ singleLoggedVisaData, handleDelete }) => {
    const {
        _id, email, firstName, lastName, appliedDate, fee, countryImage,
        countryName, visaType, processingTime, requiredDocuments,
        description, ageRestriction, validity, applicationMethod
    } = singleLoggedVisaData;

    return (
        <div className="card card-compact bg-base-100  mt-4 shadow-xl hover:bg-[#162e40] hover:text-white">
            <figure>
                <img className='w-28 bg-cover' src={countryImage} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{countryName}</h2>
                <p className='font-bold'>Visa Type: <span className='font-normal'>{visaType}</span></p>
                <p className='font-bold'>Cost: <span className='font-normal'>{fee}$</span></p>
                <p className='font-bold'>Processing Time: <span className='font-normal'>{processingTime} days</span></p>
                <p className='font-bold'>Validity: <span className='font-normal'>{validity} days</span></p>
                <p className='font-bold'>Application Method: <span className='font-normal'>{applicationMethod}</span></p>
                <p className='font-bold'>Applied Date: <span className='font-normal'>{appliedDate}</span></p>
                <p className='font-bold'>Name: <span className='font-normal'>{firstName}</span> <span className='font-normal'>{lastName}</span></p>
                <p className='font-bold'>Email: <span className='font-normal'>{email}</span></p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-primary text-black bg-white hover:text-white hover:bg-red-500 hover:border-white border-black border"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyApplicationCard;

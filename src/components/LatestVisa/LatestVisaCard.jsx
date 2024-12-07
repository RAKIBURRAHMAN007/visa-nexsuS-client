import React from 'react';
import { Link } from 'react-router-dom';

const LatestVisaCard = ({latestVisa}) => {
    const { countryImage, countryName, visaType, fee,
        processingTime, _id,
        validity,
        applicationMethod
         } = latestVisa;
    return (
        <div className="card card-compact bg-base-100  lg:w-72 mt-4 shadow-xl hover:bg-[#162e40]  hover:text-white">
            <figure>
                <img className=' w-28 bg-cover '
                    src={countryImage} />

            </figure>
            <div className="card-body ">
                <h2 className="card-title">{countryName}</h2>
                <p className='font-bold'>Visa Type:<span className='font-normal'>{visaType}</span></p>
                <p className='font-bold'>Cost: <span className='font-normal'>{fee}$</span></p>
                <p className='font-bold'>Processing Time: <span className='font-normal'>{processingTime}days</span></p>
                <p className='font-bold'>Validity: <span className='font-normal'>{validity}days</span></p>
                <p className='font-bold'>Application Method: <span className='font-normal'>{applicationMethod}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/visaDetails/${_id}`}  ><button className="btn btn-primary text-black bg-white hover:text-white hover:bg-red-500 hover:border-white border-black border ">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LatestVisaCard;
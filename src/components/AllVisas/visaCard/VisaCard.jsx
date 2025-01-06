import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa }) => {
    const { countryImage, countryName, description, visaType, fee,
        processingTime, _id } = visa;
    return (
        <div className="card card-compact bg-base-100   mt-4 shadow-xl hover:bg-[#162e40]  hover:text-white">
            <figure>
                <img className=' w-28 bg-cover '
                    src={countryImage} />

            </figure>
            <div className="p-2 w-full space-y-2">
                <h2 className="card-title">{countryName}</h2>
                <p className='font-bold text-[14px]'>
                    Type:
                    <span className='text-sm font-normal'>{visaType}</span></p>
                
                <p className="font-bold text-[14px]">
                    Description:
                    <span className="font-normal text-sm w-full  line-clamp-3  " >
                        {description}$
                    </span>
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/visaDetails/${_id}`}  ><button className="btn btn-primary text-black bg-white hover:text-white hover:bg-red-500 hover:border-white border-black border ">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;